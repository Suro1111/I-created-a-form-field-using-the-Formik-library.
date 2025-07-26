
import "../../assets/global/global.css";

export function SectionContainer(props) {
    return (
        <section className={props.section}>
            <div className="container">
                {props.children}
            </div>
        </section>
    )
}