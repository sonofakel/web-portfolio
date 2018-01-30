import React from 'react'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
<div className="logo">
    <span className="icon fa-bicycle"></span>
    </div>
    <div className="content">
    <div className="inner">
    <h1>Charlie Kelson</h1>
<p>Coder &#8226; Musician &#8226; Bicyclist</p>
</div>
</div>
<nav>
<ul>
<li><a href="javascript:;" onClick={() => {props.onOpenArticle('intro')}}>Intro</a></li>
<li><a href="javascript:;" onClick={() => {props.onOpenArticle('work')}}>Work</a></li>
<li><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>About</a></li>
<li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Contact</a></li>
</ul>
</nav>
</header>
)

Header.propTypes = {
    onOpenArticle: React.PropTypes.func,
    timeout: React.PropTypes.bool
}

export default Header
