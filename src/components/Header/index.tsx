import { useContext } from 'react'

import styles from './styles.module.scss'
import Link from 'next/link'

import { FiLogOut } from 'react-icons/fi'

import { AuthContext } from '../../contexts/AuthContext'

export function Header(){

    const { signOut, user } = useContext(AuthContext)

    if(user.role == "admin"){
        return(
            <header className={styles.headerContainer}>
                <div className={styles.headerContent}>
                    <Link href="/dashboard">
                        <img src="/queropizza.svg" width={190} height={60} />
                    </Link>
    
                    
    
                    <nav className={styles.menuNav}>
                        <Link href="/category">
                            <a>Categoria</a>
                        </Link>
    
                        <Link href="/product">
                            <a>Cardapio</a>
                        </Link>
    
                        <button onClick={signOut}>
                            <FiLogOut color="#FFF" size={24} />
                        </button>
    
                    </nav>
    
                </div>
            </header>
        ) 
    }else{
        
    return(
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <Link href="/dashboard">
                    <img src="/queropizza.svg" width={190} height={60} />
                </Link>

                

                <nav className={styles.menuNav}>
                   
                    <button onClick={signOut}>
                        <FiLogOut color="#FFF" size={24} />
                    </button>

                </nav>

            </div>
        </header>
    )}

    
}