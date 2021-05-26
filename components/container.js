import classnames from 'classnames/bind'
import { useContext } from 'react'

import styles from './container.module.scss'

let cx = classnames.bind(styles)

export default function Container({children, pinchContent}) {
    
    const containerClasses = cx({
        container : true,
        ['container--content'] : pinchContent
    })

    return (
        <div className={containerClasses}>
            {children}
        </div>
    )
}