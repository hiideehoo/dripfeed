function Feed() {

    const textbox = 
        <textarea className="textbox" id="content" required maxLength="280" rows="6" cols="50">
        </textarea>

    const send =
        <button className="button" id="send" onClick={() => sendPost()}>
            SEND
        </button>

    const sendPost = async () => {

        const content = document.getElementById('content').value;

        let response = await fetch('http://localhost:8080/posts', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ content })
        });

        document.getElementById('content').value='';
    }
    
    return (
        <div>
            <p>
                Hello!
            </p>
            {textbox}
            {send}
        </div>
    )
}

export default Feed;