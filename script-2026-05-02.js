const transcriptData = [
    ["Same planet, different feed. Two populations looking at a screen.", "Même planète, flux différent. Deux populations regardant un écran."],
    ["Both seeing the same war from completely different angles.", "Toutes deux voient la même guerre sous des angles complètement différents."],
    ["I don't hate Iranian people, I just don't know anything about them except what comes through my feed.", "Je ne hais pas les Iraniens, je ne sais juste rien d'eux sauf ce qui arrive à travers mon flux."],
    ["And my feed makes them look like a country that wants war.", "Et mon fil d'actualité les fait passer pour un pays qui veut la guerre."],
    ["I have no problem with American people.", "Je n'ai aucun problème avec le peuple américain."],
    ["I have a problem with what their government does.", "J'ai un problème avec ce que fait leur gouvernement."],
    ["But when I say that online the algorithm shows me the worst of them.", "Mais quand je dis ça en ligne, l'algorithme me montre le pire d'entre eux."],
    ["Not the regular people.", "Pas les gens normaux."],
    ["The algorithm was not designed to make enemies, it was designed to maximize time on screen.", "L'algorithme n'a pas été conçu pour se faire des ennemis, il a été conçu pour maximiser le temps passé sur l'écran."],
    ["Anger keeps people on screen longer than anything else. So the machine learned to feed anger.", "La colère retient les gens devant l'écran plus longtemps que n'importe quoi d'autre. La machine a donc appris à nourrir la colère."],
    ["The data is not secret; platforms know that outrage keeps users engaged longer.", "Les données ne sont pas secrètes ; les plateformes savent que l'indignation maintient les utilisateurs engagés plus longtemps."],
    ["A post that makes you angry gets shared six times more than a post that makes you think.", "Une publication qui vous met en colère est partagée six fois plus qu'une publication qui vous fait réfléchir."],
    ["This is not a conspiracy, this is a business model. The algorithm did not create the disagreement.", "Ce n'est pas un complot, c'est un modèle économique. L'algorithme n'a pas créé le désaccord."],
    ["It found it, amplified it, and served it back at maximum volume.", "Il l'a trouvé, l'a amplifié, et l'a servi à nouveau au volume maximum."],
    ["We see two kinds of media here:", "On voit ici deux types de médias :"],
    ["State media that tells us Americans are our enemy.", "Les médias d'État qui nous disent que les Américains sont nos ennemis."],
    ["And foreign media that tells us our own government is our enemy.", "Et les médias étrangers qui nous disent que notre propre gouvernement est notre ennemi."],
    ["Neither one shows us ordinary American people living ordinary lives.", "Aucun des deux ne nous montre des Américains ordinaires menant des vies ordinaires."],
    ["It is not just governments doing this, it is every content creator who learns through trial and error that division gets clicks and solidarity does not.", "Ce ne sont pas seulement les gouvernements qui font cela, ce sont tous les créateurs de contenu qui apprennent par essais et erreurs que la division génère des clics et pas la solidarité."],
    ["The machine rewards separation, it punishes nuance.", "La machine récompense la séparation, elle punit la nuance."],
    ["And beyond the algorithm there are actors who use it deliberately.", "Et au-delà de l'algorithme, il y a des acteurs qui l'utilisent délibérément."],
    ["Not to sell advertising, but to shape perception, to manufacture consent or to manufacture conflict.", "Non pas pour vendre de la publicité, mais pour façonner la perception, fabriquer le consentement ou fabriquer le conflit."],
    ["The same operation can post content that makes Americans afraid of Iran. And simultaneously post content that makes Iranians angry at America.", "La même opération peut publier du contenu qui fait peur aux Américains de l'Iran. Et simultanément publier du contenu qui rend les Iraniens en colère contre l'Amérique."],
    ["Same building, same shift, different audiences. This is documented. This is real.", "Même bâtiment, même équipe, publics différents. C'est documenté. C'est réel."],
    ["The wall between them is not geography, it is not language, it is not history.", "Le mur entre eux n'est pas la géographie, ce n'est pas la langue, ce n'est pas l'histoire."],
    ["It is an invisible architecture of curated information designed to keep them from recognizing each other.", "C'est une architecture invisible d'informations filtrées conçue pour les empêcher de se reconnaître mutuellement."],
    ["I shared that post because it made me angry. I didn't check if it was real. I didn't look at who made it. I just shared it and then I forgot about it.", "J'ai partagé ce post parce qu'il m'a mis en colère. Je n'ai pas vérifié s'il était vrai. Je n'ai pas regardé qui l'avait fait. J'ai juste partagé et puis j'ai oublié."],
    ["But it's still out there. I did the same thing, I shared something that confirmed what I already believed. I didn't ask who made it or why we are both doing this every day.", "Mais c'est toujours là-bas. J'ai fait la même chose, j'ai partagé quelque chose qui confirmait ce que je croyais déjà. Je n'ai pas demandé qui l'avait fait ni pourquoi nous faisons tous les deux cela chaque jour."],
    ["This is not a problem belonging to one country or one political system. State-sponsored information operations have been documented in over 80 countries.", "Ce n'est pas un problème appartenant à un seul pays ou à un seul système politique. Des opérations d'information parrainées par l'État ont été documentées dans plus de 80 pays."],
    ["The machine does not have a single nationality, it has a single purpose: to keep populations divided.", "La machine n'a pas une seule nationalité, elle a un seul but : maintenir les populations divisées."],
    ["Some countries began teaching media literacy in primary schools. Their students can identify coordinated inauthentic behavior.", "Certains pays ont commencé à enseigner l'éducation aux médias dans les écoles primaires. Leurs élèves peuvent identifier les comportements inauthentiques coordonnés."],
    ["Trace funding sources and recognize emotional manipulation in headlines. This is not a technology problem, it is an education problem.", "Tracer les sources de financement et reconnaître la manipulation émotionnelle dans les gros titres. Ce n'est pas un problème de technologie, c'est un problème d'éducation."],
    ["I started talking to someone from the other side on a language app. In three weeks I learned more about what life there is actually like than I had in 30 years of reading news about it.", "J'ai commencé à parler à quelqu'un de l'autre côté sur une application de langue. En trois semaines, j'en ai appris plus sur ce à quoi ressemble réellement la vie là-bas qu'en 30 ans à lire des infos à ce sujet."],
    ["He asked me what music I listen to, what I eat for breakfast, whether I was scared during the strikes.", "Il m'a demandé quelle musique j'écoute, ce que je mange au petit-déjeuner, si j'avais eu peur pendant les frappes."],
    ["Nobody in the news ever asks ordinary people those questions. They only ask about weapons and leaders.", "Dans les médias, personne ne pose jamais ce genre de questions aux gens ordinaires. On ne leur parle que d'armes et de dirigeants."],
    ["Regulatory frameworks now require platforms to explain their algorithmic amplification. Not to stop it but to explain it.", "Les cadres réglementaires exigent désormais des plateformes qu'elles expliquent leur amplification algorithmique. Non pas pour y mettre fin, mais pour l'expliquer."],
    ["Transparency is the first step you cannot regulate what you cannot see. Alternative architectures exist built without attention economy models.", "La transparence est la première étape : on ne peut pas réglementer ce qu'on ne voit pas. Il existe d'autres architectures qui ne reposent pas sur des modèles d'économie de l'attention."],
    ["Built without engagement optimization. They are smaller, they are slower. But they work differently.", "Elles ne visent pas à optimiser l'engagement. Elles sont plus modestes, elles sont plus lentes. Mais elles fonctionnent différemment."],
    ["The wall is real, the machine is real. But the people on both sides are also real.", "Le mur est réel, la machine est réelle. Mais les gens des deux côtés le sont aussi."],
    ["And the machine has not yet figured out how to make empathy less interesting than anger.", "Et la machine n’a pas encore trouvé le moyen de rendre l’empathie moins intéressante que la colère."],
    ["Both of them found the same account, a journalist who covered both sides, the same information reaching both sides at the same time.", "Les deux ont trouvé le même compte, celui d’un journaliste qui a couvert les deux camps, les mêmes informations parvenant aux deux camps en même temps."],
    ["The algorithm did not plan for this. I don't think I can change the algorithm.", "L'algorithme n'avait pas prévu cela. Je ne pense pas pouvoir modifier l'algorithme."],
    ["But I can choose what I feed it. I can follow people who make me curious instead of people who make me angry.", "Mais je peux choisir ce que je lui donne à manger (à l'algorithme). Je peux suivre des gens qui me rendent curieux au lieu des gens qui me mettent en colère."],
    ["That is a small thing. But it is something I actually control. We say the media lies but we keep reading it.", "C'est un détail. Mais c'est quelque chose sur lequel j'ai réellement le contrôle. On dit que les médias mentent, mais on continue à les lire."],
    ["We say social media divides us. But we keep using it the same way. At some point the responsibility is also ours. Not only the machines.", "On dit que les réseaux sociaux nous divisent. Mais on continue à les utiliser de la même manière. À un certain moment, la responsabilité nous incombe aussi. Pas seulement les machines."],
    ["The system is not a conspiracy of one actor, it is an ecosystem. Governements, platforms, advertisers, content creators, and users.", "Le système n'est pas une conspiration d'un seul acteur, c'est un écosystème. Les gouvernements, les platforms, les annonceurs, les créateurs de contenu, et les utilisateurs."],
    ["All participating, all benefiting in some way from the division. Curiosity gets less engagement than anger.", "Nous y participons tous, et nous tirons tous profit, d'une manière ou d'une autre, de cette division. La curiosité suscite moins d'engagement que la colère."],
    ["Curiosity is a choice that does not require the machine's permission. The same applies on both sides.", "La curiosité est un choix qui ne nécessite pas l’autorisation de la machine. Cela vaut pour les deux camps."],
    ["The question is not which side is more manipulated. The question is whether both sides can see the manipulation at the same time.", "La question n'est pas de savoir quel camp est le plus manipulé. La question est de savoir si les deux camps peuvent percevoir la manipulation en même temps."],
    ["When both populations see the system not just the enemy the system shows them the wall becomes visible.", "Lorsque les deux populations voient le système, et pas seulement l'ennemi que le système leur montre, le mur devient visible."],
    ["And a visible wall can be questioned. The troll farm is still running tonight. The operations did not stop. But somewhere in the world someone is now aware the troll farm exists.", "Et un mur visible peut être remis en question. La ferme à trolls fonctionne toujours ce soir. Les opérations n’ont pas cessé. Mais quelque part dans le monde, quelqu’un a désormais conscience de l’existence de cette ferme à trolls."],
    ["That awareness did not exist 10 years ago. The next generation is learning what the current one did not.", "Il y a dix ans, cette prise de conscience n'existait pas. La nouvelle génération apprend ce que la génération actuelle n'a pas appris."],
    ["Media literacy in schools is not a solution, it is a foundation. Solutions take longer than headlines.", "L'éducation aux médias à l'école n'est pas une solution, c'est un fondement. Les solutions prennent plus de temps à se concrétiser que les gros titres."],
    ["The war is still happening. The strait is still contested. The machine is still running.", "La guerre fait toujours rage. Le détroit est toujours disputé. La machine continue de tourner."],
    ["But the machine is not the whole story it never was. Before you share, pause. Ask who made this. Ask who benefits from your anger.", "Avant de partager, prenez le temps de réfléchir. Demandez-vous qui est à l'origine de tout cela. Demandez-vous à qui profite votre colère."],
    ["That pause takes 3 seconds. The machine was not designed for that pause.", "Cette pause dure 3 secondes. La machine n'a pas été conçue pour cette pause."],
    ["That 3-second pause is the gap the machine cannot close.", "Cette pause de 3 secondes est l'écart que la machine ne peut pas combler."],
    ["It is also the gap where everything else begins. Primary sources exist. Before the algorithm. Before the headline.", "C'est aussi ce vide d'où tout le reste prend naissance. Les sources primaires existent. Avant l'algorithme. Avant le titre."],
    ["The document, the data, the person who was actually there. These still exist.", "Le document, les données, la personne qui était réellement présente. Tout cela existe encore."],
    ["Encrypted direct communication between two people is outside the algorithm's reach. Not invisible but private.", "Une communication directe et chiffrée entre deux personnes échappe à la portée de l'algorithme. Elle n'est pas invisible, mais privée."],
    ["The machine cannot amplify what it cannot see. The golden hour light looks the same from both cities.", "La machine ne peut pas amplifier ce qu'elle ne voit pas. La lumière de l'heure dorée est identique dans les deux villes."],
    ["The algorithm does not control the sky. It only controls the screen. The screen is not everything.", "L'algorithme ne contrôle pas le ciel. Il ne contrôle que l'écran. L'écran n'est pas tout."],
    ["Documenting how the system works is also a form of resistance. Not dramatic, not visible, but real.", "Documenter le fonctionnement du système est aussi une forme de résistance. Pas spectaculaire, pas visible, mais bien réelle."],
    ["The machine does not like being mapped. The alternative is begin built slowly. By people who are not billionaires. By people who believe infrastructure matters.", "La machine n'aime pas être cartographiée. L'alternative se construit petit à petit. Par des gens qui ne sont pas milliardaires. Par des gens qui croient que les infrastructures comptent."],
    ["It is unglamourous work. It is necessary work. The full picture at once. The machine still running.", "C'est un travail peu glamour. C'est un travail indispensable. Une vue d'ensemble immédiate. La machine tourne toujours."],
    ["The classroom still teaching. The apps still connecting. The regulations still forming. All of it through at the same time.", "Les cours continuent d'être dispensés. Les applications continuent de fonctionner. Les réglementations continuent d'être élaborées. Tout cela se déroule simultanément."],
    ["Months later they are still talking. The algorithm does not know what to do with a conversation that does not generate outrage.", "Des mois plus tard, les discussions se poursuivent. L'algorithme ne sait pas quoi faire d'une conversation qui ne suscite pas d'indignation."],
    ["It tries to interrupt. It does not always succeed. Not angry, not afraid, just human.", "Il essaie d'intervenir. Il n'y parvient pas toujours. Ni en colère, ni effrayé, juste humain."],
    ["That is the thing the machine has been trying to make impossible. It has not succeeded yet.", "C'est justement ce que la machine tente d'empêcher. Elle n'y est pas encore parvenue."],
    ["Same planet, same orbit, the algorithm lines are still there. But so are the human lines.", "Même planète, même orbit, les lignes de l'algorithme sont toujours là. Mais les lignes humaines aussi."],
    ["The question is which ones get stronger. The war is outside. The machine is everywhere.", "La question est de savoir lesquelles prendront le dessus. La guerre fait rage dehors. La machine est partout."],
    ["But inside, the choice of what to feed it, that is still ours. For now the wall is still there. But there is a window in it.", "Mais à l'intérieur, c'est encore à nous de choisir ce que nous lui donnons à manger. Pour l'instant, le mur est toujours là. Mais il y a une fenêtre dedans."],
    ["Now, that window was not there before. Someone put it there. Not a government, not a platform.", "Or, cette fenêtre n'était pas là avant. Quelqu'un l'a mise là. Pas un gouvernement, pas une plateforme."],
    ["Just a person who chose to look through.", "Juste une personne qui a choisi de regarder à travers."]
];

const quizData = [
    // PRONONCIATION
    { 
        q: "Comment se prononce 'Though' ?", 
        o: ["Al-zoo", "Al-th-oh (son vibrant)", "Al-through"], 
        c: 1,
        e: "'Though' (bien que) se termine par un son 'O' long. Le 'th' est sonore/vibrant."
    },
    { 
        q: "Comment se prononce 'Through' ?", 
        o: ["Th-rou (rime avec blue)", "Th-raw", "Th-rough"], 
        c: 0,
        e: "'Through' (à travers) rime avec 'blue' ou 'shoe'. Le 'th' est ici sourd (soufflé)."
    },
    { 
        q: "La prononciation correcte de 'Also' est :", 
        o: ["Al-zo", "Al-sso", "Al-sh-o"], 
        c: 1,
        e: "En anglais, le 's' de 'also' se prononce comme un 's' sifflant (comme 'serpent'), pas comme un 'z'."
    },
    { 
        q: "Comment prononce-t-on 'Thought' ?", 
        o: ["Th-a-t (sourd)", "Th-o-t (rime avec caught)", "Th-ou-t"], 
        c: 1,
        e: "'Thought' est le passé de 'think'. Il rime avec 'caught' ou 'bought'."
    },
    { 
        q: "Le 'th' dans 'Through' est :", 
        o: ["Sourd (soufflé)", "Vibrant (sonore)", "Muet"], 
        c: 0,
        e: "On l'appelle 'unvoiced TH'. C'est juste un passage d'air entre la langue et les dents."
    },
    // VOCABULAIRE
    { 
        q: "Que signifie 'Actually' ?", 
        o: ["Actuellement", "En fait / Réellement", "Aujourd'hui"], 
        c: 1,
        e: "C'est un faux-ami ! 'Actually' signifie 'en réalité'. Pour 'actuellement', on dit 'currently'."
    },
    { 
        q: "Quelle est la traduction de 'Schedule' ?", 
        o: ["Un schéma", "Un agenda / Programmer", "Une école"], 
        c: 1,
        e: "Un 'schedule' est un emploi du temps ou un calendrier de tâches."
    },
    { 
        q: "Un 'False cognate', c'est quoi ?", 
        o: ["Un verbe irrégulier", "Un faux ami", "Une faute de frappe"], 
        c: 1,
        e: "C'est le terme technique pour un mot qui ressemble à un mot français mais a un sens différent."
    },
    { 
        q: "Que signifie 'Confident' ?", 
        o: ["Un secret", "Confiant", "Incertain"], 
        c: 1,
        e: "En anglais, être 'confident', c'est avoir de l'assurance ou de la confiance en soi."
    },
    { 
        q: "Que veut dire 'Neighborhood' ?", 
        o: ["Le voisinage / quartier", "La fraternité", "L'enfance"], 
        c: 0,
        e: "Le suffixe '-hood' indique souvent un état ou un groupe. Ici, c'est le quartier où l'on vit."
    },
    // GRAMMAIRE
    { 
        q: "On utilise 'Much' pour :", 
        o: ["Le dénombrable", "L'indénombrable", "Les personnes"], 
        c: 1,
        e: "On utilise 'much' pour ce qu'on ne peut pas compter individuellement (water, time, money)."
    },
    { 
        q: "Quelle phrase est correcte ?", 
        o: ["How many sugar?", "How much apples?", "How many children?"], 
        c: 2,
        e: "'Children' est le pluriel de 'child'. C'est dénombrable, donc on utilise 'many'."
    },
    { 
        q: "Le passé de 'To think' est :", 
        o: ["Thinked", "Thank", "Thought"], 
        c: 2,
        e: "'Think' est un verbe irrégulier : think / thought / thought."
    },
    { 
        q: "Pour dire 'Je prends (actuellement) ma douche' :", 
        o: ["I have a shower", "I'm having a shower", "I took a shower"], 
        c: 1,
        e: "On utilise le présent continu (BE + -ING) pour une action qui se passe au moment où l'on parle."
    },
    { 
        q: "On dit 'Prendre une décision' :", 
        o: ["To take a decision", "To make a decision", "To do a decision"], 
        c: 1,
        e: "En anglais, on utilise généralement le verbe 'to make' avec 'decision'."
    },
    // COMPRÉHENSION (VIDÉO)
    { 
        q: "D'après la vidéo, qu'est-ce qui génère le plus de partages ?", 
        o: ["La curiosité", "La colère (anger)", "La solidarité"], 
        c: 1,
        e: "La vidéo explique que les posts provoquant la colère sont partagés 6 fois plus."
    },
    { 
        q: "L'algorithme a été conçu pour maximiser :", 
        o: ["La paix", "Le temps passé sur l'écran", "L'éducation"], 
        c: 1,
        e: "Le but commercial est de retenir l'utilisateur le plus longtemps possible pour la publicité."
    },
    { 
        q: "Comment l'auteur a-t-il appris la 'vraie' vie de l'autre côté ?", 
        o: ["Via les news", "Via une application de langue", "Via l'algorithme"], 
        c: 1,
        e: "En discutant directement avec un étranger sur une application, sans le filtre des médias."
    },
    { 
        q: "Quelle est la 'fondation' mentionnée pour l'avenir ?", 
        o: ["L'éducation aux médias (media literacy)", "Plus de technologie", "Le blocage des réseaux"], 
        c: 0,
        e: "Apprendre à identifier la manipulation est présenté comme la base nécessaire."
    },
    { 
        q: "Quel est le but de la pause de 3 secondes ?", 
        o: ["Réfléchir avant de partager", "Laisser la machine charger", "Regarder une pub"], 
        c: 0,
        e: "C'est l'écart que l'algorithme ne peut pas combler : le moment de réflexion humaine."
    }
];

// Remplissage Table
const tbody = document.getElementById('transcript-body');
transcriptData.forEach(line => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
        <td><button class="speaker-btn" onclick="speak('${line[0].replace(/'/g, "\\'")}')">🔊</button></td>
        <td class="eng">${line[0]}</td>
        <td class="fra">${line[1]}</td>
    `;
    tbody.appendChild(tr);
});

function speak(text) {
    const msg = new SpeechSynthesisUtterance(text);
    msg.lang = 'en-US';
    window.speechSynthesis.speak(msg);
}

// Remplissage Quiz
const quizContent = document.getElementById('quiz-content');
quizData.forEach((item, index) => {
    let html = `
        <div class="quiz-question" id="question-${index}">
            <p><strong>${index + 1}. ${item.q}</strong></p>
            <div class="options-grid">
    `;
    item.o.forEach((opt, i) => {
        html += `
            <label class="option-label" id="label-${index}-${i}">
                <input type="radio" name="q${index}" value="${i}" onclick="checkImmediate(${index}, ${i})"> ${opt}
            </label>`;
    });
    html += `
            </div>
            <div id="feedback-${index}" style="display:none; margin-top:10px; padding:10px; border-radius:5px; font-size:0.9rem;"></div>
        </div>`;
    quizContent.innerHTML += html;
});

function checkImmediate(qIndex, selectedIdx) {
    const question = quizData[qIndex];
    const feedbackDiv = document.getElementById(`feedback-${qIndex}`);
    const inputs = document.getElementsByName(`q${qIndex}`);

    // Désactiver tous les inputs de cette question
    inputs.forEach(input => input.disabled = true);

    feedbackDiv.style.display = "block";
    feedbackDiv.innerHTML = `<strong>${selectedIdx === question.c ? '✅ Correct !' : '❌ Incorrect.'}</strong><br>${question.e}`;

    if (selectedIdx === question.c) {
        feedbackDiv.style.backgroundColor = "#d4edda";
        feedbackDiv.style.color = "#155724";
        document.getElementById(`label-${qIndex}-${selectedIdx}`).style.borderColor = "#27ae60";
        document.getElementById(`label-${qIndex}-${selectedIdx}`).style.backgroundColor = "#e8f5e9";
    } else {
        feedbackDiv.style.backgroundColor = "#f8d7da";
        feedbackDiv.style.color = "#721c24";
        document.getElementById(`label-${qIndex}-${selectedIdx}`).style.borderColor = "#e74c3c";
        document.getElementById(`label-${qIndex}-${selectedIdx}`).style.backgroundColor = "#ffebee";
        // Surligner aussi la bonne réponse en vert
        document.getElementById(`label-${qIndex}-${question.c}`).style.borderColor = "#27ae60";
    }
}

function validateQuiz() {
    let score = 0;
    let answered = 0;
    quizData.forEach((item, index) => {
        const selected = document.querySelector(`input[name="q${index}"]:checked`);
        if (selected) {
            answered++;
            if (parseInt(selected.value) === item.c) score++;
        }
    });

    const resBox = document.getElementById('quiz-result');
    resBox.style.display = "block";

    if (answered < quizData.length) {
        resBox.innerHTML = `Attention Benoît, tu n'as répondu qu'à ${answered} questions sur ${quizData.length}.<br>Ton score actuel : ${score} / ${quizData.length}`;
        resBox.style.backgroundColor = "#fff3cd";
        resBox.style.color = "#856404";
    } else {
        resBox.innerHTML = `Score Final : ${score} / 20. ${score >= 15 ? 'Excellent travail Benoît ! 🌟' : 'Continue de réviser le vocabulaire ! 💪'}`;
        resBox.style.backgroundColor = score >= 15 ? '#d4edda' : '#f8d7da';
        resBox.style.color = score >= 15 ? '#155724' : '#721c24';
    }
    window.scrollTo(0, document.body.scrollHeight);
}