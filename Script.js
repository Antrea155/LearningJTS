document.getElementById('contact-form').addEventListener
('submit', async function(event) 
    {
        event.preventDefault(); // Prevents the form from reloading the page

        const form = event.target; 
        const formData = new FormData(form);

        try 
        {//submit form to Formspree
            const response = await fetch 
            (
              //URL                 POST                SEND        JSON response instead of a redirect.
              form.action,{ method: form.method, body: formData, headers:{'Accept': 'application/json'}}
            );
            if (response.ok) 
            {
                alert("Thanks for your message! I'll get back to you soon.");
                form.reset();
            }else 
            {
                alert("Oops! There was a problem submitting your form.");
            }
        } catch (error) 
        {
            alert("Something went wrong. Please try again later.");
            console.error(error);
        }
    }
);