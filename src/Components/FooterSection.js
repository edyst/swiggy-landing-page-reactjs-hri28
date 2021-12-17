import React from 'react'
import './Footer.css'
import Footerlinks from './FooterLinks'
import './../../node_modules/bootstrap/dist/css/bootstrap.css'
import { Facebook } from 'react-bootstrap-icons';
import { Instagram } from 'react-bootstrap-icons';
import { Twitter } from 'react-bootstrap-icons';



function FooterSection(){
    const companyLinks = [
        {
            text: "About us",
            url:"/aboutus"
        },
        {
            text: "Team",
            url:"/team"
        },
        {
            text: "Careers",
            url:"/careers"
        },
        {
            text: "Swiggy Blog",
            url:"/swiggyblog"
        },
        {
            text: "Bug Bounty",
            url:"/bugbounty"
        },
        {
            text: "Swiggy Super",
            url:"/swiggysuper"
        },
        {
            text: "Swiggy Corporate",
            url:"/swiggycorporate"
        },
        {
            text: "Swiggy Instamart",
            url:"/instamart"
        }
    ]

    const contactLinks = [
        {
            text: "Help & Support",
            url: "/help"
        },
        {
            text: "Partner with us",
            url: "/partner"
        },
        {
            text: "Ride with us",
            url: "/ride"
        },
    ]

    const legalLinks = [
        {
            text: "Terms & Conditions",
            url: "/tandc"
        },
        {
            text: "Refund & Cancellation",
            url: "/randc"
        },
        {
            text: "Privacy Policy",
            url: "/privacy"
        },
        {
            text: "Cookie Policy",
            url: "/cookies"
        },
        {
            text: "Offer Terms",
            url: "/offer"
        },
        {
            text: "Phishing & Fraud",
            url: "/phishing"
        },
    ]
    const aCityLinks = [
        {
            text: "Abohar",
            url: "/abohar"
    },
    {
        text: "Adilabad",
        url: "/adilabad"
},
{
    text: "Adityapur",
    url: "/adityapur"
},
{
    text: "Adoni",
    url: "/adoni"
},
{
    text: "Agartala",
    url: "/agartala"
},
]

const dCityLinks = [
    {
        text: "Dausa",
        url: "/dausa"
},
{
    text: "Davanagere",
    url: "/davanahere"
},
{
text: "Dehradun",
url: "/dehradun"
},
{
text: "Dehri",
url: "/dehri"
},
{
text: "Delhi",
url: "/delhi"
},
]

const kCityLinks = [
    {
        text: "Kishanganj",
        url: "/kishanganj"
},
{
    text: "Kishangarh",
    url: "/kishangarh"
},
{
text: "Kodaikanal",
url: "/kodaikanal"
},
{
text: "Kochi",
url: "/kochi"
},
{
text: "Kolar",
url: "/kolar"
},
]

const pCityLinks = [
    {
        text: "Pudukkottai",
        url: "/pudukkotai"
},
{
    text: "Pune",
    url: "/pune"
},
{
text: "Puri",
url: "/puri"
},
{
text: "Purnea",
url: "/purnea"
},
{
text: "Purulia",
url: "/purulia"
},
]


    return(
        <div className="footer">
        <div className="container">
        <Footerlinks heading="COMPANY" links={companyLinks}/>
        <Footerlinks heading="CONTACT" links={contactLinks}/>
        <Footerlinks heading="LEGAL" links={legalLinks}/>
        <div className="footer-img">
        <a href="/" className="footerimg1"><img className="img img-responsive mt-5 footerimg1" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-AppStore_lg30tv" alt="app-store" /></a>
        <a href="/" className="footerimg1"><img className="img img-responsive mt-4 footerimg1" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-GooglePlay_1_zixjxl" alt="play-store"/></a>
        </div>
        </div>
        <hr />
        <div className="container1 mt-5">
        <h6  className="footer-heading cityh6 text-muted">WE DELIVER TO</h6>
        <div className="row">
        <div className="col-sm-12 col-md-3"><Footerlinks links={aCityLinks}/></div>
        <div className="col-sm-12 col-md-3"><Footerlinks className="citylinks" links={dCityLinks}/></div>
        <div className="col-sm-12 col-md-3"><Footerlinks className="citylinks" links={kCityLinks}/></div>
        <div className="col-sm-12 col-md-3"><Footerlinks className="citylinks" links={pCityLinks}/></div>
        </div>
        </div>
        <hr />
        <div className="container-2">
            <a href="/"><img className="img img-responsive" height="45px" width="145px" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_284/Logo_f5xzza" alt="swiggy-logo"></img></a>
            <h5>&#169; 2021 Swiggy</h5>
            <div className="social-icons">
            <Facebook className="social-icon" />
            <a href="/"><img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_48,h_48/icon-pinterest_kmz2wd" alt="pinterest-icon" className="social-icon" height="45px"/></a>
            <Instagram className="social-icon" />
            <Twitter className="social-icon" />
            </div>  
        </div>
        </div>

    )
}

export default FooterSection;