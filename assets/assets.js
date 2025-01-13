import user_image from './user-image.png';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import vapt from './security.png';
import bug_hunting from './pest-control.png'
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import shield_image from './blank-shield.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';
import application from './application.png';
import framer from './framer.png'
import facebook_icon from './facebook.png'
import linkedin_icon from './linkedin.png'
import github_icon from './github-logo.png'
import instagram_icon from './instagram.png'
import next_button from './next-button.png'
import send from './send-mail.png'

export const assets = {
    next_button,
    send,
    facebook_icon,
    linkedin_icon,
    github_icon,
    instagram_icon,
    framer,
    shield_image,
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    firebase,
    figma,
    git,
    mongodb,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    vapt,
    bug_hunting,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark,
    application,
};

export const workData = [
    {
        title: 'Frontend project',
        description: 'Web Design',
        bgImage: '/work-1.png',
        link: '/works#fronted_project',
    },
    {
        title: 'CTF',
        description: 'Capture the flag',
        bgImage: '/work-2.png',
        link: '/works#ctf',
    },
    {
        title: 'Bug hunting',
        description: 'LogyFull site',
        bgImage: '/work-3.png',
        link: '/works#bug_hunt',
    },
    {
        title: 'Cybersecurity Consulting',
        description: 'Provide guidance',
        bgImage: '/work-4.png',
        link: '/works#cybersecurityconsulting',
    },
]

export const applicationData =[
    {title: 'Security Assessments', description: ' In-depth analysis of your web applications to identify vulnerabilities and misconfigurations.'},
    {title: 'OWASP Compliance Testing', description: 'Testing your applications against OWASP Top 10 vulnerabilities.'},
    {title: 'Threat Modeling', description: ' Identifying potential attack vectors and weak points in your system architecture.'},
    {title: 'Penetration Testing', description: 'Simulating real-world attacks to uncover security gaps.'},
    {title: 'Code Reviews', description: 'Reviewing your application’s codebase to ensure secure coding practices.'},
    {title: 'Security Hardening', description: 'Strengthening your web application’s security through optimized configurations and patches.'},
]

export const bugData =[
    {title: 'Thorough Testing', description: 'Manual and automated testing to identify functional and security-related bugs.'},
    {title: 'Security Flaw Detection', description: 'Locating vulnerabilities like SQL injection, cross-site scripting (XSS), and other OWASP top risks.'},
    {title: 'Functional Bug Identification', description: 'Finding glitches in workflows, broken links, or errors in your application’s logic.'},
    {title: 'Detailed Reporting', description: ' Comprehensive reports highlighting bugs, their impact, and recommended fixes.'},
    {title: 'Post-Fix Validation', description: 'Ensuring all reported bugs have been properly resolved through retesting.'},
]

export const vaptData =[
    {title: 'Comprehensive Security Audits', description: 'I assess your applications, websites, and networks for potential vulnerabilities.'},
    {title: 'Custom Penetration Testing', description: 'Simulated attacks designed to uncover and resolve security gaps.'},
    {title: 'Detailed Reporting', description: 'A thorough report with identified vulnerabilities, risk levels, and actionable remediation steps.'},
    {title: 'Compliance Testing', description: 'Ensuring your systems meet industry standards and regulations (e.g., OWASP, GDPR).'},
    {title: 'Continuous Monitoring', description: 'Ongoing assessments to keep your systems secure as new threats emerge.'},
]

export const webData =[
    {title: 'Custom Web Solutions', description: 'Every project is unique. I design and develop websites that reflect your brand identity and business goals.'},
    {title: 'Responsive Design', description: 'Your website will look and perform flawlessly on desktops, tablets, and mobile devices.'},
    {title: 'Front-end & Back-end Development', description: 'From intuitive user interfaces to robust server-side functionality, I provide end-to-end development solutions.'},
    {title: 'Security First', description: ' I prioritize secure coding practices and integrate measures to protect your website from potential threats.'},
    {title: 'SEO Optimization', description: 'Boost your online visibility with websites optimized for search engines.'},
    {title: 'Maintenance & Support', description: 'Stay stress-free with my post-launch support and maintenance plans.'},
]

export const serviceData = [
    { icon: assets.web_icon, title: 'Web design', description: 'Web development is the process of building, programming...', link: '/services#web_design' },
    { icon: assets.vapt, title: 'VAPT', description: '**Vulnerability Assessment and Penetration Testing (VAPT)** is a process to identify...', link: '/services#vapt' },
    { icon: assets.bug_hunting, title: 'Bug Hunting', description: 'Bug Hunting is the practice of identifying security vulnerabilities and flaws in software, applications, or systems...', link: 'services#bug_hunting' },
    { icon: assets.application, title: 'Web Application Security', description: 'Web Application Security focuses on protecting web applications from cyber threats and vulnerabilities. It involves...', link: 'services#application' },
]

export const infoList = [
    { icon: assets.code_icon, title: 'Languages',link: '/about#lang', description: 'HTML, CSS, JavaScript, Next Js, Python'},
    { icon: assets.edu_icon, title: 'Cyber Security',link: '/about#cybersecurity', description: "I'm spechialized in VAPT, Bug hunting, Web Application Security etc." },
    { icon: assets.project_icon, title: 'Projects',link: '/works', description: 'Worked for more than 5 projects' }
];

export const toolsData = [
    {icon: assets.vscode, link: "https://code.visualstudio.com/"},
    {icon: assets.firebase, link: "https://firebase.google.com/"},
    {icon: assets.git, link: "https://git-scm.com/"},
    {icon: assets.framer, link: "https://motion.dev/"},
];