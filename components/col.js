import classnames from 'classnames/bind'

import styles from './col.module.scss'

let cx = classnames.bind(styles)

export default function Col({ children, xs, sm, md, lg }) {

    const colClasses = cx({
        col:true,
        [`col--xs--${xs}`]: xs, 
        [`col--sm--${sm}`]: sm, 
        [`col--md--${md}`]: md, 
        [`col--lg--${lg}`]: lg, 
    })

    return (
        <div className={styles.col}>
            {children}
        </div> 
    )
}