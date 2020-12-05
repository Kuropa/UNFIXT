import React from "react";
import style from './Form.module.css';
import {i18n} from "../../../lib/i18n/i18n";
import Button from "../../Button/Button";

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.submitForm = this.submitForm.bind(this);
        this.state = {
            status: ''
        };
    }

    render() {
        const { status } = this.state;
        return (
            <div data-aos='fade'>
                <p className={style.header}>{i18n.text('contacts/title_3')}</p>
                <form
                    onSubmit={this.submitForm}
                    action='https://formspree.io/xzbjrpww'
                    method='POST'
                >
                    <div className={style.formWrap}>
                        <div className={style.wrapper}>
                            <input type='text' name='name' placeholder={i18n.text('contacts/form/name')} />
                        </div>
                        <div className={style.wrapper}>
                            <input type='email' name='email' placeholder={i18n.text('contacts/form/email')} />
                        </div>
                        <div className={style.wrapper}>
                            <input type='text' name='message' autoComplete='none' placeholder={i18n.text('contacts/form/message')} />
                        </div>
                    </div>
                    {status === 'SUCCESS' ? <p className={style.submitText}>{i18n.text('contacts/form/submited')}</p> :
                        <Button color='#000000'text={i18n.text('contacts/form/button')}/>}
                    {status === 'ERROR' && <p className={style.submitText}>{i18n.text('contacts/form/unsubmited')}</p>}
                </form>
            </div>
        );
    }

    submitForm(ev) {
        ev.preventDefault();
        const form = ev.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader('Accept', 'application/json');
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== XMLHttpRequest.DONE) return;
            if (xhr.status === 200) {
                form.reset();
                this.setState({ status: 'SUCCESS' });
            } else {
                this.setState({ status: 'ERROR' });
            }
        };
        xhr.send(data);
    }
}

export default Form