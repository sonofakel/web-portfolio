import React from 'react'
import Link from 'gatsby-link'

import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.png'
import pic03 from '../images/pic03.jpg'
import pic04 from '../images/pic04.png'
import pic05 from '../images/pic05.png'

class Main extends React.Component {
    render() {

        let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

        return (
            <div id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

    <article id="intro" className={`${this.props.article === 'intro' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
    <h2 className="major">Intro</h2>
        <span className="image main"><img src={pic01} alt="" /></span>
        <h3>Why programming?</h3>
        <p>I love solving puzzles. Every day I code, I get to solve problems of varying difficulty. Whether fixing a small bug or planning out a user's experience from scratch, I relish the opportunity to be creative, learn something new and be challenged throughout the entire process.</p>
        <h3>Fight for Accessibility</h3>
        <p>The accessibility factor of programming gives me faith in humanity’s struggles to provide equity to all. I've never been exposed to something as powerful, free and ubiquitous as programming. When building a house you need materials that cost money. When you build a website all the materials are provided for you and all you need is the willpower and discipline to learn how to build it. I've found that this is no small task though and there are still high barriers to entry for the world's most exposed populations. Many programmers are on the front-line to help protect the openness of the internet from corporate interest. They are inventing new technologies to help decentralize the internet. I want to help develop these new technologies to keep the internet as open and accessible as possible.</p>
        <h3>A Sense of Community</h3>
        <p>No other industry-specific community is as passionate or altruistic as the programming community. Highly-skilled professionals dedicate countless hours via YouTube tutorials and StackOverflow posts to help aspiring developers hone their skills. There are countless meetups where industry leaders share their secrets and insights with anyone who will show up. I love this aspect of programming and am looking forward to contributing to this community as my skills increase.</p>
        {close}
    </article>

        <article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
    <h2 className="major">Work</h2>
            <span className="image main"><img src={pic02} alt="" /></span>
            <h3>Off The Record, Inc.</h3>
        <p>Working with AngularJS, HTML, and SASS I built a new login/sign up modal window to increase Off The Records conversion rate for ~600 unique daily sessions. The modal was an integral part of receiving payment from users and needed to be seamless. I gathered data from FullStory before the project to identify common pain points in the login/sign up workflow. After the project was completed, the result was a smoother and more intuitive UI that helped potential prospects complete their transaction and convert to paying customers.</p>
        <p>Off The Record, Inc. is an amazing service that has reviews posted all over the internet from multiple sources (Facebook, Google, iOS). I  built a <a href ="https://offtherecord.com/reviews" target="_blank"> reviews page</a> that aggregates 4-5 star reviews from multiple sources using infinite scroll, a masonry layout and a UI that I mocked up in CodePen. After launching the reviews page, traffic increases to rank the page second in hits only after the home page. </p>
        <span className="image main"><img src={pic04} alt="" /></span>
            <h3>Rubicon Yachts</h3>
        <p>Using PHP, HTML, and CSS I helped plan, build and maintain a new site for Rubicon Yachts. Their site integrates YachtWorlds API and WordPress powerful CMS to help the brokers reduce the time it takes to list a new boat. SEO was also a priority on the site so I incorporated keyword analysis and research as part of our planning phase. Working hand-in-hand with the owners of Rubicon I delivered a product that was both easy to use and looked great. They were very happy with the result and have since seen a rise in listings and sales after the new site's launch.</p>
            <span className="image main"><img src={pic05} alt="" /></span>
            <h3><a href="http://voracious-oranges.flywheelsites.com/" target="_blank">Ballard Sails</a></h3>
            <p>I completed a site redesign, rebranding, and SEO analysis for Ballard Sails, a local sailing loft in Ballard, WA. Working with key stakeholders and a local copywriter from 48° North, a local sailing magazine, the website is content rich with stark imagery and industry-specific language. I used the WordPress CMS to empower employees of Ballard Sails to update and add new content as their products change. The result is a stunning website that is set to launch in 2018.</p>
        {close}
    </article>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
    <h2 className="major">About</h2>
            <span className="image main"><img src={pic03} alt="" /></span>
            <h3>Coding Bootcamp</h3>
        <p>I graduated (Jan 2018) from a 6-month bootcamp in Seattle that focused on C#/ASP.NET and Javascript/Angular. I can say that without a doubt it was one of the best experiences of my life. Programming for 40+ hours a week solidified my passion to become a software engineer. I passed 16 rigorous individual coding assessments, each one lasting 8+ hours. I also worked with a diverse group of students from various backgrounds on a daily basis in a pair-programming environment. This helped strengthen my interpersonal skills as well as my technical aptitude.</p>
        <h3>The Beginning</h3>
        <p>Prior to my bootcamp experience, my interest in programming began after business school, in 2011, when I learned how to use osCommerce (https://www.oscommerce.com), an e-commerce platform that uses the LAMP stack. From that point on, I was hooked.  I continued to learn HTML/CSS part-time and started building WordPress sites for friends and small businesses. I offered my services to anyone that needed a website, many times for free just to get experience.</p>
    <h3>Going Forward</h3>
        <p>Currently, I am a Front End Engineer intern for a startup called Off The Record, Inc. I use AngularJS, HTML and SASS to build streamlined web experiences on their customer-facing marketing site https://offtherecord.com/. My goal is to make our customers' experience as smooth as possible on any device as well as follow fundamentals of accessibility.</p>
            <p>Daily I find my self on codepen.io or dotnetfiddle.net practicing Javascript/C# and learning new concepts like CSS Grid. I listen to multiple podcasts on a regular basis and have a few blogs ready to pull up on my iPhone at a moments notice. This year I am looking forward to learning more about static-site generators and GraphQL. I will also be building a portfolio site with Gatsby.js, an exciting static-site generator that uses React and GraphQL. 2018 is going to be an amazing year of learning and growth and I can't wait to see what I build.</p>

        {close}
    </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
    <h2 className="major">Contact</h2>
            <form method="post" action="https://formspree.io/charlie.m.kelson@gmail.com">
            <div className="field half first">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
            <label htmlFor="email">Email</label>
            <input type="text" name="email" id="email" />
            </div>
            <div className="field">
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
            <li><input type="submit" value="Send Message" className="special" /></li>
            <li><input type="reset" value="Reset" /></li>
            </ul>
            </form>
        {close}
    </article>

        </div>
    )
    }
}

Main.propTypes = {
    route: React.PropTypes.object,
    article: React.PropTypes.string,
    articleTimeout: React.PropTypes.bool,
    onCloseArticle: React.PropTypes.func,
    timeout: React.PropTypes.bool
}

export default Main