(C) Copyright Ioniță Alexandru-Darius 2024

# _Proba IT LSAC 2024_

## _Cum rulează codul_

- Pentru frontend npm run dev
- Pentru backend npm start

## _Taskuri implementate_

### Homepage
- Strict frontend
- Logica pentru adăugarea de rețete nu este adăugată, rețetele de pe pagină sunt
hardcodate (și furate de pe figma)
- Formularul de contact există dar nu face prea multe
- Adăugat footer cu link-uri utile către social media LSAC

### Pagina de profil
- Implementat și frontend și backend
- User-ul este track-uit folosind JSONWebToken
- Singurele câmpuri folosite sunt name, e-mail și telephone

### Register și login
- My joy and pride
- Implementat și frontend și backend
- Informațiile sunt stocate într-un database prin intermediul MongoDB. Baza de
date este online și autentificarea se face printr-un URL, also nu se conectează
de pe adrese IP diferite, dar o să încerc să repar
- Fiecare user are un id, un nume, un e-mail, un telefon și o parolă
- Parolele sunt criptate folosind bcrypt
- Sunt handle-uite erorile folosind react-hot-toast
- Fiecare mail și telefon ar trebui să fie unice
- După logare, navbar-ul se schimbă accordingly

### Pagina de adăugat rețete
- Strict frontend
- Not much else to say

## _Final thoughts_

- Asta a fost prima oară când am încercat să creez un website și cred că se vede :))
- Many firsts here cum ar fi:
    - Prima oară când am folosit the MERN stack
    - Prima oară când am scris cod în JavaScript
    - Prima oară când am folosit css
    - Prima oară când am codat orice fel de backend (experiență ezoterică)
- Website-ul clar nu este gata, și aș mai fi adăugat funcționalități dacă îmi
permitea timpul, dar eu sunt destul de satisfăcut cu acest rezultat, chiar dacă
nu e cel mai bun.
- Această probă m-a încurajat să ies din zona mea de confort și să învăț lucruri
nou, și chiar mă bucur, pentru că tot acest proces a fost extrem de fun și am
dobândit cunoștințe extrem de folositoare și practice
- Shout out cel mai bun mentor ever Prusi (Andrei Prusacov the goat)