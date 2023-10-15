function checkScreenSize() {
    if (window.innerWidth >= 665) {
        document.querySelector('section').style.display = '';
        document.querySelector('section').style.width = '210mm';
        document.querySelector('section').style.height = '297mm';
        document.querySelector('body').style.display = 'flex';
        document.querySelector('.user-customs').style.display = '';
        document.querySelector('.bar-btns').style.display = '';
        document.querySelector('.preview-btn').style.display = 'none';
    }
}
//
function createResume() {
        document.querySelector('.landing').style.display = 'none';
        document.querySelector('.scroll-container').style.display = '';
        document.querySelector('.scroll-tip').style.display = '';
        document.querySelector('.bar-btns').style.display = '';
};
document.querySelector('#create-resume-btn').addEventListener('click', createResume);
document.querySelector('#create-resume-btn').addEventListener('click', checkScreenSize);
//
let previewBtnValue = 0;
function previewTemplate() {
    if (previewBtnValue == 0) {
        previewBtnValue++;
        previewBtn.textContent = 'Return';
        document.querySelector('main').style.display = 'none';
        document.querySelector('.print-btn').style.display = '';
        document.querySelector('.customs-btn').style.display = '';
        document.querySelector('#resume-section').style.display = '';
    } else { 
        document.querySelector('#resume-section').style.display = 'none';
        document.querySelector('.user-customs').style.display = 'none';
        document.querySelector('.customs-btn').style.display = 'none';
        document.querySelector('.print-btn').style.display = 'none';
        document.querySelector('main').style.display = '';
        previewBtn.textContent = 'Preview';
         previewBtnValue--;
    }
};
const previewBtn = document.querySelector('.preview-btn')
    previewBtn.addEventListener('click', previewTemplate);
//display a popup-msg if the data has been captured
function displayPopUpMsg() {
    const popUpMsg = document.createElement('p');
        popUpMsg.setAttribute('id', 'pop-up-msg');
        popUpMsg.textContent = 'Saved successfully';
        document.querySelector('main').append(popUpMsg);
    setTimeout(() => {
        popUpMsg.remove();
    }, 700);
};
//code to handle user data//
let person = {
    fullName: '',
    email: '',
    contact: '',
    address: {
        street: '',
        suburb: '',
        city: '',
    },
    objective: {
        header: '',
        content: '',
    },
    education: [], 
    skills:{
        softSkill: [],
        hardSkill: [],
    },
    experience: [],
    reference: [],
};
//retrieve user inputs and append to the template//
function saveUserInfo() {
    //retrieving user inputs//
    const fullName = document.querySelector('#fullName');
    if (fullName.value !== ''){
        person.fullName = fullName.value;
        const email = document.querySelector('#email');
            person.email = email.value;
        const contact = document.querySelector('#contact');
            person.contact = contact.value;
        //appending to resume template
        function appendInfo() {
            const fullNameTag = document.querySelector('#full-name-tag');
                fullNameTag.textContent = person.fullName;
            const contactTag = document.querySelector('#contact-info-tag');
                contactTag.textContent = person.contact;
            const emailTag = document.querySelector('#email-info-tag');
                emailTag.textContent = person.email;
        };
        //save data to local storage
        function setLocalStorage(){
            localStorage.setItem('person.fullName', person.fullName);
            localStorage.setItem('person.contact', person.contact);
            localStorage.setItem('person.email', person.email);
        }
        appendInfo();
        displayPopUpMsg();
        setLocalStorage();
    };
};
document.querySelector('#save-personal-details').addEventListener('click', saveUserInfo);
//
function saveAddressInfo() {
    //retrieving user inputs//
    const street = document.querySelector('#street');
    if (street.value !== ''){
        person.address.street = street.value;
        const suburb = document.querySelector('#suburb');
            person.address.suburb = suburb.value;
        const city = document.querySelector('#city');
            person.address.city = city.value;
        //appending to resume template
        function appendInfo() {
            const streetAddressTag = document.querySelector('#street-address-tag')
                streetAddressTag.textContent = person.address.street;
            const suburbAddressTag = document.querySelector('#suburb-address-tag')
                suburbAddressTag.textContent = person.address.suburb;
            const cityAddressTag = document.querySelector('#city-address-tag')
                cityAddressTag.textContent = person.address.city;
        };
        //save data to local storage
        function setLocalStorage(){
            localStorage.setItem('person.street', person.address.street);
            localStorage.setItem('person.suburb', person.address.suburb);
            localStorage.setItem('person.city', person.address.city);
        }
    appendInfo();
    displayPopUpMsg();
    setLocalStorage();
    };
};
document.querySelector('#save-address-details').addEventListener('click', saveAddressInfo);
//
function saveCareerObjectiveInfo() {
    //retrieving user inputs//
    const objectiveHeaderTag = document.querySelector('#career-objective-header');
    function appendInfo() {
        if (objectiveHeaderTag.value !== ''){
            person.objective.header = objectiveHeaderTag.value;
            const careerObjHeaderTag = document.querySelector('#career-objective-heading');
                careerObjHeaderTag.textContent = person.objective.header;
        };
        const objectiveContentTag = document.querySelector('#career-objective-content');
        if (objectiveContentTag.value !== ''){
            person.objective.content = objectiveContentTag.value;
            const careerObjParaTag = document.querySelector('#career-objective-para-tag');
                careerObjParaTag.textContent = person.objective.content;
            displayPopUpMsg();
        };         
    };
    //save data to local storage
    function setLocalStorage(){
        localStorage.setItem('person.objective.header', person.objective.header);
        localStorage.setItem('person.objective.content', person.objective.content);
    }
    appendInfo();
    setLocalStorage();
};
document.querySelector('#save-career-details').addEventListener('click', saveCareerObjectiveInfo);
//
function saveEducationInfo(){
    let education = {
        name: '',
        finalYear: '',
        qualification: '',
    };
    //retrieving user inputs//
    const schoolName = document.querySelector('#school-name');
    if (schoolName.value !== ''){
            education.name = schoolName.value;
        const finalYear = document.querySelector('#final-year');
            education.finalYear = finalYear.value;
        const qualification = document.querySelector('#qualification');
            education.qualification = qualification.value;   
            person.education.push(education);
        //appending to resume template
        function appendInfo() {
            const parentElement = document.querySelector('#education-list-tag');
            const childElement = document.createElement('li');
                parentElement.append(childElement);
            const qualificationTag = document.createElement('p');
                qualificationTag.setAttribute('id', 'education-qualification-tag');
                qualificationTag.textContent = qualification.value;
                childElement.append(qualificationTag);
            const institutionTag = document.createElement('p');
                institutionTag.setAttribute('id', 'education-institution-tag');
                institutionTag.textContent = schoolName.value;
                childElement.append(institutionTag);
            const finalYearTag = document.createElement('p');
                finalYearTag.setAttribute('id', 'education-final-year-tag');    
                finalYearTag.textContent = finalYear.value;
                childElement.append(finalYearTag);
            };

        appendInfo();
        displayPopUpMsg();
    };
};
document.querySelector('#add-education').addEventListener('click', saveEducationInfo);
//
function saveSkillsInfo (typeOFSkill){
    const skillElement = document.querySelector('#'+typeOFSkill);
    if (skillElement.value !== ''){
        person.skills[typeOFSkill].push(skillElement.value)
        //appending to resume template
        function appendInfo() {
            if (typeOFSkill == 'softSkill') {
                const parentElement = document.querySelector('#soft-skills-list-tag');
                    const childElement = document.createElement('li');
                        childElement.textContent = skillElement.value;
                        parentElement.append(childElement);
            }//for user-hard-skills
            if (typeOFSkill == 'hardSkill') {
                const parentElement = document.querySelector('#hard-skills-list-tag');
                    const childElement = document.createElement('li');
                        childElement.textContent = skillElement.value;
                        parentElement.append(childElement);
            };
        };
        appendInfo();
        displayPopUpMsg();
    };
};
document.querySelector('#add-soft-skill').addEventListener('click', () => saveSkillsInfo('softSkill'));
document.querySelector('#add-hard-skill').addEventListener('click', () => saveSkillsInfo('hardSkill'));
//
function saveExperienceInfo(){
    let experience = {
        workplace: '',
        date: '',
        position: '',
        duty: '',
    };
    //retrieving user inputs//
    const workplace = document.querySelector('#workplace');
    if (workplace.value !== ''){
        experience.workplace = workplace.value;
        const startDate = document.querySelector('#start-date');
        const endDate = document.querySelector('#end-date');
            if (startDate.value !== '' && endDate.value !== ''){
                let newStartDate = new Date(startDate.value).toLocaleDateString('en-US', {year: 'numeric', month: 'short', day: 'numeric'})
                let newEndDate = new Date(endDate.value).toLocaleDateString('en-US', {year: 'numeric', month: 'short', day: 'numeric'})
                    experience.date = newStartDate + ' - ' + newEndDate;
            } else {
                if (startDate.value !== '' && endDate.value == '') {
                    let newStartDate = new Date(startDate.value).toLocaleDateString('en-US', {year: 'numeric', month: 'short', day: 'numeric'})
                    experience.date = newStartDate + ' - ' + 'Current';
                } else {
                    experience.date =  ' - ';
                };
            };
        const workPosition = document.querySelector('#work-position');
            experience.position = workPosition.value;
        const workDuty = document.querySelector('#work-duty');
            experience.duty = workDuty.value;
        person.experience.push(experience);
        //appending to resume template
        function appendInfo() {
            const parentElement = document.querySelector('#work-experience-list-tag');
            const childElement = document.createElement('li');
                parentElement.append(childElement);
            const workDurationTag = document.createElement('p');
                workDurationTag.setAttribute('id', 'work-experince-duration-tag');
                workDurationTag.textContent = experience.date;
                childElement.append(workDurationTag);
            const workPositionTag = document.createElement('p');
                workPositionTag.setAttribute('id', 'work-experience-position-tag');
                workPositionTag.textContent = experience.position;
                childElement.append(workPositionTag);
            const companyNameTag = document.createElement('p');
                companyNameTag.setAttribute('id', 'work-experience-company-tag');
                companyNameTag.textContent = experience.workplace;
                childElement.append(companyNameTag);
            const workDutyTag = document.createElement('p');
                workDutyTag.setAttribute('id', 'work-experience-duty-tag');
                workDutyTag.textContent = experience.duty;
                childElement.append(workDutyTag);
        };
        appendInfo();
        displayPopUpMsg();
        //creating the dropdown list for references-company-name
        if (experience.workplace !== '') {
            const listParent = document.querySelector('#company-dropdown-list')
            const listChild = document.createElement('option');
                listChild.textContent = experience.workplace;
                listParent.append(listChild);
        };
    };
};
document.querySelector('#add-experience').addEventListener('click', saveExperienceInfo);
//
function saveReferenceInfo(){
    let reference = {
        workplace: '',
        person: '',
        position: '',
        contact: {
            cell: '',
            email: '',
        },
    };
    //retrieving user inputs//
    const refWorkplace = document.querySelector('#ref-workplace');
    if (refWorkplace.value !== ''){
        reference.workplace = refWorkplace.value;
        const refPerson = document.querySelector('#ref-person');
            reference.person = refPerson.value;
        const refPosition = document.querySelector('#ref-position');
            reference.position = refPosition.value;
        const refContact = document.querySelector('#ref-contact');
            reference.contact.cell = refContact.value;
        const refEmail = document.querySelector('#ref-email');
            reference.contact.email = refEmail.value;
        person.reference.push(reference);
        //appending to resume template
        function appendInfo() {
            const parentElement = document.querySelector('#work-reference-list');
            const childElement = document.createElement('li');
                parentElement.append(childElement);
            const companyNameTag = document.createElement('p');
                companyNameTag.setAttribute('id', 'reference-company-tag');
                companyNameTag.textContent = reference.workplace;
                childElement.append(companyNameTag);
            const positionTag = document.createElement('p');
                positionTag.setAttribute('id', 'reference-position-tag');
                positionTag.textContent = reference.position;
                childElement.append(positionTag);
            const personTag = document.createElement('p');
                personTag.setAttribute('id', 'reference-person-tag');
                personTag.textContent = reference.person;
                childElement.append(personTag);
            const contactTag = document.createElement('p');
                contactTag.setAttribute('id', 'reference-contact-tag');
                contactTag.textContent = reference.contact.cell;
                childElement.append(contactTag);
            const emailTag = document.createElement('p');
                emailTag.setAttribute('id', 'reference-email-tag');             
                emailTag.textContent = reference.contact.email;
                childElement.append(emailTag); 
        };
        appendInfo();
        displayPopUpMsg();
    };
};
document.querySelector('#add-reference').addEventListener('click', saveReferenceInfo);
//company-name dropdown list//
const selectDropdownElement = document.querySelector('#company-dropdown-list');
selectDropdownElement.addEventListener('change', () => {
    indexedItem = selectDropdownElement.selectedIndex;
    selectedItem = selectDropdownElement.options[indexedItem];
        itemText = selectedItem.textContent;
        document.querySelector('#ref-workplace').value = itemText;
    const dropdownList = document.querySelector('#company-dropdown-list');
        dropdownList.style.display = 'none';
});
//dropdown-magic//
const dropdownDiv = document.querySelector('.dropdown');
    dropdownDiv.addEventListener('mouseout', () => {
        const dropdownList = document.querySelector('#company-dropdown-list');
        dropdownList.style.display = 'none';
    });
    dropdownDiv.addEventListener('mouseover', () => {
        const dropdownList = document.querySelector('#company-dropdown-list');
        dropdownList.style.display = '';
    });
//event listeners//
document.querySelector('.customs-btn').addEventListener('click', () => {
        document.querySelector('.user-customs').style.display = '';
    });
//end of the second part of code//
//customizations//
    //color-picker
const colorPickerTag = document.querySelector('#color-picker');
    colorPickerTag.addEventListener('change', () => {
    document.querySelector('.aside').style.background = colorPickerTag.value;
    });
    //heading-size-adjustments
const headindSizePickerTag = document.querySelector('#h2-header-size');
    headindSizePickerTag.addEventListener('change', () => {
        const resumeH2Tags = document.querySelectorAll('.h2-header');
        resumeH2Tags.forEach( item => {
            item.style.fontSize = headindSizePickerTag.value + 'px';
        });
    });
    //font-family-selection
const fontFamilySelectTag = document.querySelector('#font-dropdown-list')
    fontFamilySelectTag.addEventListener('change', () => {
        const resumeSectionTag = document.querySelector('#resume-section');
            const resumeParaTags = resumeSectionTag.querySelectorAll('p');
                indexPos = fontFamilySelectTag.selectedIndex;
                item = fontFamilySelectTag.options[indexPos];
            for (text in resumeParaTags) {
                resumeParaTags[text].style.fontFamily = item.value;
            };
    });
//end of the third part of code//
function getLocalStorage(){
    try {
        document.querySelector('#fullName').value = localStorage.getItem('person.fullName')
        document.querySelector('#email').value = localStorage.getItem('person.email')
        document.querySelector('#contact').value = localStorage.getItem('person.contact')  
    } catch (error) {};
    try {
        document.querySelector('#street').value = localStorage.getItem('person.street')
        document.querySelector('#suburb').value = localStorage.getItem('person.suburb')
        document.querySelector('#city').value = localStorage.getItem('person.city')
    } catch (error) {};
    try {
        document.querySelector('#career-objective-content').value = localStorage.getItem('person.objective.content')
        document.querySelector('#career-objective-header').value = localStorage.getItem('person.objective.header')
    } catch (error) {};
}

window.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.delay-display').forEach((tag) => tag.style.display = 'none');
});
window.addEventListener('DOMContentLoaded', getLocalStorage);
//the end!
