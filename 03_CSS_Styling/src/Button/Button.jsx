// import styles from './Button.module.css'
// Adding style using Modules
// We use modules when we want to add styles to specific elements. We get a hashed className and we don't need to worry about conflicting names.

function Button(){

    // return(
    //     <button className={styles.button}>Click Me</button>
    // )

    // Inline CSS styling is good for understand and also prevents global naming conflicts

    const styles = {
        backgroundColor: "#00aaff",
        color: "#fff",
        padding: "10px 20px",
        borderRadius: "5px",
        border: "none",
        cursor: "pointer", 
    }

    return(
        <button style={styles}>Click Me</button>
    )
}
export default Button