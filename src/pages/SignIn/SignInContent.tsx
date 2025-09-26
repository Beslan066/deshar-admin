import { SignInForm } from "../../features/auth/SignInForm"
import './styles.scss';
export const SignInContent = () => {
    return (
        <section className="SignInContent">
            <div className="SignInContent__inner">
                <div className="SignInContent__image_col">
                    <div className="SignInContent__image_wrapper">
                        <div className="SignInContent__image_tint">
                        </div>
                        <div className="SignInContent__image">
                            <img src="/img/SignInPage/image.png" alt="" />
                        </div>
                    </div>
                </div>
                <div className="SignInContent__form_col">
                    <SignInForm />
                </div>
            </div>
        </section>
    )
}