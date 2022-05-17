import React from 'react'
import Button from './Button'
import Link from './Link'
import LogoBakery from './LogoBakery'

import styles from "./navbar.module.css"

function Navbar() {
  return (
    <div>

    <div className={styles.navbar}> 

    <LogoBakery/>
    <Link/>
    <Button/>
    </div>

    </div>
  )
}

export default Navbar