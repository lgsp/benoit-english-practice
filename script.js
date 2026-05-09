const quizData = [
    // COMPRÉHENSION
    { q: "Quelle est l'analogie du cerveau dans la vidéo ?", o: ["Un muscle", "Un programme informatique", "Une éponge", "Un miroir"], c: 1, e: "Le cerveau suit des procédures étape par étape comme un algorithme." },
    { q: "Combien d'aptitudes forment une procédure ?", o: ["2", "4", "6", "10"], c: 1, e: "Reconnaître, Séquencer, Créer des liens, Détecter des liens." },
    { q: "Pourquoi les listes longues sont-elles dures à classer ?", o: ["Manque de sommeil", "Manque d'états intermédiaires", "Trop de lettres", "L'alphabet change"], c: 1, e: "C'est une limite de notre mémoire de travail par rapport aux machines." },
    { q: "Que fait la répétition sur les synapses ?", o: ["Elle les affaiblit", "Elle les renforce", "Elle les supprime", "Rien"], c: 1, e: "La répétition crée des automatismes par renforcement synaptique." },
    { q: "Comment comparons-nous deux lettres ?", o: ["Au hasard", "Via la séquence apprise", "Par leur forme", "Par leur couleur"], c: 1, e: "On utilise la séquence de l'alphabet mémorisée enfant." },
    // VOCABULAIRE
    { q: "Que signifie 'Actually' ?", o: ["Actuellement", "En fait", "Aujourd'hui", "Vraiment"], c: 1, e: "Faux-ami : 'Actually' = En fait. 'Currently' = Actuellement." },
    { q: "Traduisez 'un mouchoir' :", o: ["A tissue", "A paper", "A issue", "A towel"], c: 0, e: "A tissue. Attention à la prononciation /'tɪsjuː/." },
    { q: "Que signifie 'to fix' ?", o: ["Fixer du regard", "Réparer/Résoudre", "Attacher", "Coller"], c: 1, e: "To fix a problem / an issue." },
    { q: "Différence entre 'issue' et 'exit' ?", o: ["Sortie vs Entrée", "Problème vs Sortie", "Sortie vs Problème", "Identiques"], c: 1, e: "An issue = un problème. An exit = une sortie physique." },
    { q: "Traduisez 'Gratte-ciel' :", o: ["Building", "High-tower", "Skyscraper", "Sky-high"], c: 2, e: "Sky (ciel) + Scraper (grattoir)." },
    // GRAMMAIRE
    { q: "Comment dit-on 'Je suis d'accord' ?", o: ["I am agree", "I agree", "I'm agree", "I agreeing"], c: 1, e: "Agree est un verbe : I agree / I disagree." },
    { q: "Traduisez 'Je ne sais rien' :", o: ["I don't know nothing", "I know nothing", "I don't know something", "I know anything"], c: 1, e: "I know nothing ou I don't know anything." },
    { q: "Pluriel de 'person' ?", o: ["Persons", "People", "Peoples", "Peoplz"], c: 1, e: "One person -> Two people." },
    { q: "Traduisez 'Je cherche mes clés' :", o: ["I look my keys", "I'm looking at my keys", "I'm looking for my keys", "I look for my keys"], c: 2, e: "To look for = chercher. To look at = regarder." },
    { q: "On dit :", o: ["Take a decision", "Make a decision", "Do a decision", "Work a decision"], c: 1, e: "L'expression consacrée est 'to make a decision'." },
    // PRONONCIATION
    { q: "Comment prononce-t-on 'J' ?", o: ["Dji", "Djay", "Ji", "Yé"], c: 1, e: "J = Jay / G = Dji." },
    { q: "Le 'K' de 'Know' est :", o: ["Sonore", "Muet", "Vibrant", "Explosif"], c: 1, e: "Comme dans 'Knight', le K est muet : /nəʊ/." },
    { q: "Accent tonique de 'computer' ?", o: ["COM-puter", "com-PU-ter", "compu-TER", "Neutre"], c: 1, e: "L'accent est sur la 2ème syllabe." },
    { q: "Quelle lettre change entre 'dust' et 'dusk' ?", o: ["La voyelle", "La consonne finale", "Le début", "Rien"], c: 1, e: "Dust (T) = poussière / Dusk (K) = crépuscule." },
    { q: "Comment prononce-t-on 'Y' ?", o: ["Way", "Why", "Yi", "Wai"], c: 1, e: "Y se prononce comme 'Why'." }
];

const vocab = [
    { en: "Actually", fr: "En fait", ex: "Actually, it's a bit different." },
    { en: "To fix an issue", fr: "Résoudre un problème", ex: "I fixed the computer issue." },
    { en: "A tissue", fr: "Un mouchoir", ex: "Do you have a tissue?" },
    { en: "I agree", fr: "Je suis d'accord", ex: "I agree with you." },
    { en: "Downtown", fr: "Centre-ville", ex: "Let's go downtown." },
    { en: "To look for", fr: "Chercher", ex: "I'm looking for my phone." },
    { en: "Skyscraper", fr: "Gratte-ciel", ex: "New York has many skyscrapers." },
    { en: "To become", fr: "Devenir", ex: "It becomes difficult." },
    { en: "Dust vs Dusk", fr: "Poussière vs Crépuscule", ex: "Clean the dust. At dusk, the sun sets." },
    { en: "A knight", fr: "Un chevalier", ex: "A knight in shining armor." }
];

let score = 0, answered = 0;
const container = document.getElementById('quiz-container');

quizData.forEach((q, i) => {
    const div = document.createElement('div');
    div.className = 'quiz-question';
    div.innerHTML = `<p><strong>${i+1}. ${q.q}</strong></p><div class="options-grid" id="opt-${i}">
        ${q.o.map((opt, j) => `<button class="option-btn" onclick="check(${i},${j})">${opt}</button>`).join('')}
    </div><div class="feedback" id="fb-${i}"></div>`;
    container.appendChild(div);
});

vocab.forEach(v => {
    document.getElementById('vocab-table').innerHTML += `<tr><td><strong>${v.en}</strong></td><td>${v.fr}</td><td class="example">${v.ex}</td></tr>`;
});

window.check = (qI, sI) => {
    const q = quizData[qI], fb = document.getElementById(`fb-${qI}`), btns = document.getElementById(`opt-${qI}`).children;
    Array.from(btns).forEach(b => b.disabled = true);
    fb.style.display = "block";
    if(sI === q.c) { score++; btns[sI].classList.add('correct'); fb.innerHTML = "✅ Correct ! " + q.e; fb.style.background = "#d4edda"; }
    else { btns[sI].classList.add('wrong'); btns[q.c].classList.add('correct'); fb.innerHTML = "❌ " + q.e; fb.style.background = "#f8d7da"; }
    if(++answered === 20) { 
        document.getElementById('final-score').style.display = "block";
        document.getElementById('score-display').innerText = score + "/20";
    }
};