

export const Contact=()=>{


    return(
        <div>
            <h1>Contactanos</h1>
            <form
                action="https://formspree.io/f/xoqrzndp"
                method="POST"
            >
            <label>
                Your email:
                <input type="email" name="email"/>
            </label>
            <label>
                Your message:
                <textarea name="message"></textarea>
            </label>
            <button type="submit">Send</button>
            </form>





        </div>
    )
}