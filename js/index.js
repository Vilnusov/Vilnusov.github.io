
AboutUsButton = document.getElementsByClassName("about-us");
MenuButton = document.getElementsByClassName("menu");

let aboutUs = document.getElementById("about-us-frame");
let menu = document.getElementById("menu-frame");
let contacts = document.getElementById("contacts-frame");
let profile = document.getElementById("profile-frame");
let library = document.getElementById("library-frame");
let tasks = document.getElementById("tasks-frame");
let thread = document.getElementById("potok-frame");

function AboutUsPage() 
{
    aboutUs.style.display = "inline";
    menu.style.display = "none";
    contacts.style.display = "none";
    profile.style.display = "none";
}
function MenuPage() 
{
    aboutUs.style.display = "none";
    menu.style.display = "inline";
    contacts.style.display = "none";
    profile.style.display = "none";
}
function ContactsPage() 
{
    aboutUs.style.display = "none";
    menu.style.display = "none";
    contacts.style.display = "inline";
    profile.style.display = "none";
}
function ProfilePage() 
{
    aboutUs.style.display = "none";
    menu.style.display = "none";
    contacts.style.display = "none";
    profile.style.display = "inline";
}
function ProfilePage() 
{
    aboutUs.style.display = "none";
    menu.style.display = "none";
    contacts.style.display = "none";
    profile.style.display = "inline";
}
function LibraryPage() 
{
    library.style.display = "inline";
    tasks.style.display = "none";
    thread.style.display = "none";
}
function TasksPage() 
{
    library.style.display = "none";
    tasks.style.display = "inline";
    thread.style.display = "none";
}
function ThreadPage()
{
    library.style.display = "none";
    tasks.style.display = "none";
    thread.style.display = "inline";
}

AboutUsPage(); 
