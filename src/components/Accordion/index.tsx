import { FC, useState } from "react"
import classes from './index.module.css';
import Chevron from '../../svgs/chevron-up.svg';

type Props = {
    title: string;
}
export const Accordion: FC<Props> = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => {
        setIsOpen(open => !open);
    }
    return (
        <div className={classes.wrapper}>
            <div className={classes.titleBar} onClick={handleClick}>
                <h2>{title}</h2>
                <div style={{ transform: isOpen ? 'rotate(180deg)' : 'inherit' }} className={classes.chevron}>
                    <Chevron />
                </div>
            </div>
            <div className={classes.content}>
                {isOpen && children}
            </div>
            <hr className={classes.hr} />
        </div>
    )

}
