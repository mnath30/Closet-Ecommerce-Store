import './footer.css'

const Footer=()=>{
    const scrollToTop=()=>{
        console.log("clicked")
        window.scrollTo({
            top:0,
            behavior:'smooth'
        })
    }
    return(
            <footer className="footer padding-sm txt-md">
                <div className="padding-sm txt-bold"><button className="back-to-top-btn" onClick={scrollToTop}>Back to top</button></div>
                <div className="flex flex-center">
                    <p className="nametext">Contact us</p>
                    <ul className="flex padding-sm">
                        <li><a href="https://twitter.com/maitreyee__nath" target="__blank" ><i className="fab fa-twitter"></i></a></li>
                        <li><a href="https://github.com/mnath30" target="__blank"><i className="fab fa-github"></i></a></li>
                        <li><a href="https://www.linkedin.com/in/maitreyee-nath" target="__blank"><i className="fab fa-linkedin"></i></a></li>
                    </ul>
                </div> 
                <p>&copy; 2022 Closet. All rights reserved</p>
            </footer> 
    )
}

export {Footer}