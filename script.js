/* ================================================
   SANAT DEDEKTIFI - OYUN MANTIGI
   Ekran gecisleri, mini oyunlar, puan ve rozet sistemi
   ================================================ */

// ========== OYUN VERI TABANI ==========
const gameData = {
    techniques: [
        {
            id: 1,
            emoji: "✏️",
            name: "Karakalem",
            description: "Siyah kalemle yapılan çizimler",
            details: "Karakalem, en temel resim tekniğidir. Siyah kalemle ışık, gölge ve derinlik oluşturulur."
        },
        {
            id: 2,
            emoji: "🎨",
            name: "Sulu Boya",
            description: "Su ile karışan canlı renkli boya",
            details: "Sulu boya suyla incelir. Doğa, gökyüzü ve yumuşak renk geçişleri için çok uygundur."
        },
        {
            id: 3,
            emoji: "🌈",
            name: "Pastel Boya",
            description: "Renkli çubuk şeklindeki boya malzemesi",
            details: "Pastel boya yumuşaktır. Parmakla dağıtılarak renk geçişleri yapılabilir."
        },
        {
            id: 4,
            emoji: "📰",
            name: "Kolaj",
            description: "Farklı kağıtları yapıştırarak oluşturulan resim",
            details: "Kolajda dergi, gazete ve renkli kağıt parçaları kesilip yapıştırılır."
        },
        {
            id: 5,
            emoji: "🖌️",
            name: "Guaj Boya",
            description: "Kalın ve opak renkli boya",
            details: "Guaj boya kapatıcıdır. Canlı posterler ve tasarımlar için sık kullanılır."
        }
    ],
    findQuestions: [
        {
            visual: "Siyah beyaz tonlarla çizilmiş bir portre",
            question: "Bu çalışmada hangi teknik kullanılmıştır?",
            answer: "Karakalem",
            explanation: "Karakalem çalışmalarda siyah, beyaz ve gri tonlar öne çıkar."
        },
        {
            visual: "Suyla dağılmış gibi duran yumuşak mavi bir gökyüzü",
            question: "Bu çalışmada hangi teknik kullanılmıştır?",
            answer: "Sulu Boya",
            explanation: "Sulu boya suyla karışır ve yumuşak renk geçişleri oluşturur."
        },
        {
            visual: "Dergi ve renkli kağıt parçalarıyla yapılmış bir manzara",
            question: "Bu çalışmada hangi teknik kullanılmıştır?",
            answer: "Kolaj",
            explanation: "Kolajda farklı kağıt parçaları kesilip yapıştırılır."
        },
        {
            visual: "Canlı renkli çubuk boyalarla yapılmış bir çiçek resmi",
            question: "Bu çalışmada hangi teknik kullanılmıştır?",
            answer: "Pastel Boya",
            explanation: "Pastel boya çubuk şeklindedir ve canlı renkler verir."
        },
        {
            visual: "Kapatıcı ve parlak renklerle boyanmış bir afiş",
            question: "Bu çalışmada hangi teknik kullanılmıştır?",
            answer: "Guaj Boya",
            explanation: "Guaj boya opaktır, yani alttaki rengi iyi kapatır."
        }
    ],
    materials: [
        {
            emoji: "🖌️",
            name: "Fırça",
            answer: "Sulu boya",
            explanation: "Fırça, sulu boya ve guaj gibi boya çalışmalarında kullanılır."
        },
        {
            emoji: "✏️",
            name: "Kurşun kalem",
            answer: "Karakalem",
            explanation: "Kurşun kalem çizgi, ton ve gölge çalışmaları için uygundur."
        },
        {
            emoji: "✂️",
            name: "Makas",
            answer: "Kolaj",
            explanation: "Kolajda kağıtları kesmek için makas kullanılır."
        },
        {
            emoji: "🖍️",
            name: "Pastel boya",
            answer: "Pastel tekniği",
            explanation: "Pastel boya, pastel tekniğinin ana malzemesidir."
        },
        {
            emoji: "🎨",
            name: "Palet",
            answer: "Boya çalışması",
            explanation: "Palet, boyaları karıştırmak için kullanılır."
        }
    ],
    matchingPairs: [
        { id: 1, left: "Kurşun kalem", right: "Karakalem" },
        { id: 2, left: "Fırça", right: "Sulu boya" },
        { id: 3, left: "Makas", right: "Kolaj" },
        { id: 4, left: "Pastel boya", right: "Pastel tekniği" },
        { id: 5, left: "Palet", right: "Boya çalışması" }
    ],
    memoryCards: [
        { id: 1, pairId: 1, label: "Fırça", emoji: "🖌️" },
        { id: 2, pairId: 1, label: "Sulu boya", emoji: "💧" },
        { id: 3, pairId: 2, label: "Kurşun kalem", emoji: "✏️" },
        { id: 4, pairId: 2, label: "Karakalem", emoji: "⚫" },
        { id: 5, pairId: 3, label: "Makas", emoji: "✂️" },
        { id: 6, pairId: 3, label: "Kolaj", emoji: "📰" },
        { id: 7, pairId: 4, label: "Pastel boya", emoji: "🖍️" },
        { id: 8, pairId: 4, label: "Pastel tekniği", emoji: "🌈" }
    ],
    shadows: [
        {
            light: "Işık soldan geliyorsa gölge nereye düşer?",
            answer: "Sağa",
            sceneClass: "light-left",
            explanation: "Işık soldan gelirse gölge sağa düşer."
        },
        {
            light: "Işık sağdan geliyorsa gölge nereye düşer?",
            answer: "Sola",
            sceneClass: "light-right",
            explanation: "Işık sağdan gelirse gölge sola düşer."
        },
        {
            light: "Işık yukarıdan geliyorsa gölge nereye düşer?",
            answer: "Aşağıya",
            sceneClass: "light-top",
            explanation: "Işık yukarıdan gelirse gölge aşağıya düşer."
        },
        {
            light: "Işık önden geliyorsa gölge nereye düşer?",
            answer: "Arkaya",
            sceneClass: "light-front",
            explanation: "Işık önden gelirse gölge arkaya düşer."
        }
    ]
};

// ========== YARDIMCI FONKSIYONLAR ==========
const helpers = {
    shuffle(items) {
        return [...items].sort(() => Math.random() - 0.5);
    },

    setFeedback(elementId, message, isCorrect) {
        const feedback = document.getElementById(elementId);
        feedback.textContent = message;
        feedback.className = `feedback ${isCorrect ? 'correct' : 'wrong'}`;
    },

    clearFeedback(elementId) {
        const feedback = document.getElementById(elementId);
        feedback.textContent = "";
        feedback.className = "feedback";
    }
};

// ========== UYGULAMA NESNESI ==========
const app = {
    scores: {
        find: 0,
        material: 0,
        matching: 0,
        memory: 0,
        shadow: 0
    },
    findIndex: 0,
    materialIndex: 0,
    shadowIndex: 0,
    selectedMatchTerm: null,
    matchedPairs: 0,
    firstMemoryCard: null,
    lockMemoryBoard: false,
    memoryPairsFound: 0,
    soundEnabled: true,

    // Ekran gosterme sistemi
    showScreen(screenId) {
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.remove('active');
        });

        const targetScreen = document.getElementById(screenId);
        if (targetScreen) {
            targetScreen.classList.add('active');
        }

        if (screenId === 'learningScreen') {
            app.loadTechniques();
        }

        app.updateScoreDisplays();
    },

    addPoint(scoreKey, scoreElementId) {
        app.scores[scoreKey] += 10;
        document.getElementById(scoreElementId).textContent = app.scores[scoreKey];
        app.updateScoreDisplays();
    },

    getTotalScore() {
        return Object.values(app.scores).reduce((sum, score) => sum + score, 0);
    },

    updateScoreDisplays() {
        const total = app.getTotalScore();
        const headerScore = document.getElementById('headerTotalScore');
        const menuScore = document.getElementById('menuTotalScore');

        if (headerScore) {
            headerScore.textContent = total;
        }

        if (menuScore) {
            menuScore.textContent = total;
        }
    },

    // Tarayicinin SpeechSynthesis ozelligi ile kisa yonerge okur.
    speak(text) {
        if (!app.soundEnabled || !('speechSynthesis' in window)) {
            return;
        }

        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'tr-TR';
        utterance.rate = 0.95;
        window.speechSynthesis.speak(utterance);
    },

    toggleSound() {
        app.soundEnabled = !app.soundEnabled;
        const button = document.getElementById('soundToggleBtn');
        button.textContent = app.soundEnabled ? '🔊 Ses Açık' : '🔇 Ses Kapalı';

        if (!app.soundEnabled && 'speechSynthesis' in window) {
            window.speechSynthesis.cancel();
        }

        if (app.soundEnabled) {
            app.speak('Sesli yönerge açıldı.');
        }
    },

    // Teknikleri Ogren ekrani
    loadTechniques() {
        const techniquesList = document.getElementById('techniquesList');
        techniquesList.innerHTML = '';

        gameData.techniques.forEach(technique => {
            const card = document.createElement('div');
            card.className = 'technique-card';
            card.innerHTML = `
                <div class="technique-card-icon">${technique.emoji}</div>
                <h3>${technique.name}</h3>
                <p>${technique.description}</p>
                <p><strong>Kısa bilgi:</strong> ${technique.details}</p>
            `;
            techniquesList.appendChild(card);
        });
    },

    // Tekniği Bul oyunu
    startFindTechniqueGame() {
        app.findIndex = 0;
        app.scores.find = 0;
        document.getElementById('findScore').textContent = 0;
        app.showScreen('findTechniqueScreen');
        app.loadFindTechniqueQuestion();
        app.speak('Tekniği Bul oyunu başladı. Açıklamayı oku ve doğru resim tekniğini seç.');
    },

    loadFindTechniqueQuestion() {
        const question = gameData.findQuestions[app.findIndex];
        document.getElementById('findQuestion').textContent = `${question.visual} ${question.question}`;
        document.getElementById('findNextBtn').classList.add('hidden');
        helpers.clearFeedback('findFeedback');

        const options = ["Karakalem", "Sulu boya", "Kolaj", "Pastel boya", "Guaj boya"];
        const optionSet = helpers.shuffle(options.filter(option => {
            return option.toLocaleLowerCase('tr-TR') !== question.answer.toLocaleLowerCase('tr-TR');
        })).slice(0, 3);
        optionSet.push(question.answer);

        const optionGrid = document.getElementById('findOptions');
        optionGrid.innerHTML = '';
        helpers.shuffle(optionSet).forEach(option => {
            const button = document.createElement('button');
            button.className = 'option-btn';
            button.textContent = option;
            button.onclick = () => app.checkFindTechniqueAnswer(option, question.answer, question.explanation);
            optionGrid.appendChild(button);
        });
    },

    checkFindTechniqueAnswer(answer, correctAnswer, explanation) {
        app.disableButtons('findOptions');
        if (answer.toLocaleLowerCase('tr-TR') === correctAnswer.toLocaleLowerCase('tr-TR')) {
            app.addPoint('find', 'findScore');
            helpers.setFeedback('findFeedback', 'Doğru! Dedektif gözüyle yakaladın.', true);
            app.speak('Harika, doğru cevap!');
        } else {
            helpers.setFeedback('findFeedback', `Yanlış. ${explanation}`, false);
            app.speak('Tekrar dene, ipucuna dikkat et.');
        }
        document.getElementById('findNextBtn').classList.remove('hidden');
    },

    nextFindTechniqueQuestion() {
        app.findIndex += 1;
        if (app.findIndex >= gameData.findQuestions.length) {
            app.showResultScreen();
            return;
        }
        app.loadFindTechniqueQuestion();
    },

    // Malzemeyi Tani oyunu
    startMaterialGame() {
        app.materialIndex = 0;
        app.scores.material = 0;
        document.getElementById('materialScore').textContent = 0;
        app.showScreen('recognizeMaterialScreen');
        app.loadMaterialQuestion();
        app.speak('Malzemeyi Tanı oyunu başladı. Malzemeye bak ve en uygun çalışmayı seç.');
    },

    loadMaterialQuestion() {
        const material = gameData.materials[app.materialIndex];
        document.getElementById('materialEmoji').textContent = material.emoji;
        document.getElementById('materialQuestion').textContent = `${material.name}: Bu malzeme en çok hangi çalışmada kullanılır?`;
        document.getElementById('materialNextBtn').classList.add('hidden');
        helpers.clearFeedback('materialFeedback');

        const options = ["Sulu boya", "Karakalem", "Kolaj", "Heykel", "Pastel tekniği", "Boya çalışması"];
        const optionGrid = document.getElementById('materialOptions');
        optionGrid.innerHTML = '';
        const optionSet = helpers.shuffle(options.filter(option => option !== material.answer)).slice(0, 3);
        optionSet.push(material.answer);

        helpers.shuffle(optionSet).forEach(option => {
            const button = document.createElement('button');
            button.className = 'option-btn';
            button.textContent = option;
            button.onclick = () => app.checkMaterialAnswer(option, material.answer, material.explanation);
            optionGrid.appendChild(button);
        });
    },

    checkMaterialAnswer(answer, correctAnswer, explanation) {
        app.disableButtons('materialOptions');
        if (answer === correctAnswer) {
            app.addPoint('material', 'materialScore');
            helpers.setFeedback('materialFeedback', 'Doğru! Malzemeyi tanıdın.', true);
            app.speak('Harika, doğru cevap!');
        } else {
            helpers.setFeedback('materialFeedback', `Yanlış. ${explanation}`, false);
            app.speak('Tekrar dene, ipucuna dikkat et.');
        }
        document.getElementById('materialNextBtn').classList.remove('hidden');
    },

    nextMaterialQuestion() {
        app.materialIndex += 1;
        if (app.materialIndex >= gameData.materials.length) {
            app.showResultScreen();
            return;
        }
        app.loadMaterialQuestion();
    },

    // Eslestirme oyunu
    startMatchingGame() {
        app.scores.matching = 0;
        app.selectedMatchTerm = null;
        app.matchedPairs = 0;
        document.getElementById('matchingScore').textContent = 0;
        helpers.clearFeedback('matchingFeedback');
        app.showScreen('matchingScreen');
        app.speak('Eşleştir oyunu başladı. Soldan bir malzeme seç, sonra sağdan uygun çalışmayı bul.');

        const terms = document.getElementById('matchTerms');
        const descriptions = document.getElementById('matchDescriptions');
        terms.innerHTML = '';
        descriptions.innerHTML = '';

        gameData.matchingPairs.forEach(pair => {
            const button = document.createElement('button');
            button.className = 'match-card';
            button.textContent = pair.left;
            button.dataset.id = pair.id;
            button.onclick = () => app.selectMatchTerm(button);
            terms.appendChild(button);
        });

        helpers.shuffle(gameData.matchingPairs).forEach(pair => {
            const button = document.createElement('button');
            button.className = 'match-card';
            button.textContent = pair.right;
            button.dataset.id = pair.id;
            button.onclick = () => app.checkMatchDescription(button);
            descriptions.appendChild(button);
        });
    },

    selectMatchTerm(button) {
        document.querySelectorAll('#matchTerms .match-card').forEach(card => {
            card.classList.remove('selected');
        });
        button.classList.add('selected');
        app.selectedMatchTerm = button;
        helpers.setFeedback('matchingFeedback', 'Şimdi uygun açıklamayı seç.', true);
    },

    checkMatchDescription(button) {
        if (!app.selectedMatchTerm || button.classList.contains('matched')) {
            helpers.setFeedback('matchingFeedback', 'Önce soldan bir malzeme seç.', false);
            app.speak('Tekrar dene, ipucuna dikkat et.');
            return;
        }

        if (app.selectedMatchTerm.dataset.id === button.dataset.id) {
            app.selectedMatchTerm.classList.add('matched');
            button.classList.add('matched');
            app.selectedMatchTerm.disabled = true;
            button.disabled = true;
            app.selectedMatchTerm = null;
            app.matchedPairs += 1;
            app.addPoint('matching', 'matchingScore');
            helpers.setFeedback('matchingFeedback', 'Doğru eşleşme!', true);
            app.speak('Harika, doğru cevap!');

            if (app.matchedPairs === gameData.matchingPairs.length) {
                helpers.setFeedback('matchingFeedback', 'Harika! Tüm eşleşmeler tamamlandı.', true);
                setTimeout(app.showResultScreen, 900);
            }
        } else {
            helpers.setFeedback('matchingFeedback', 'Bu ikili uymadı. Bir daha dene.', false);
            app.speak('Tekrar dene, ipucuna dikkat et.');
        }
    },

    // Sanat Hafizasi oyunu
    startMemoryGame() {
        app.scores.memory = 0;
        app.firstMemoryCard = null;
        app.lockMemoryBoard = false;
        app.memoryPairsFound = 0;
        document.getElementById('memoryScore').textContent = 0;
        helpers.clearFeedback('memoryFeedback');
        app.showScreen('memoryScreen');
        app.speak('Sanat Hafızası oyunu başladı. İki kart aç ve uygun çiftleri bul.');

        const cards = helpers.shuffle(gameData.memoryCards);
        const board = document.getElementById('memoryBoard');
        board.innerHTML = '';

        cards.forEach((cardData, index) => {
            const card = document.createElement('button');
            card.className = 'memory-card';
            card.dataset.pairId = cardData.pairId;
            card.dataset.index = index;
            card.innerHTML = `<span class="front">?</span><span class="back">${cardData.emoji}<small>${cardData.label}</small></span>`;
            card.onclick = () => app.flipMemoryCard(card);
            board.appendChild(card);
        });
    },

    flipMemoryCard(card) {
        if (app.lockMemoryBoard || card.classList.contains('flipped') || card.classList.contains('matched')) {
            return;
        }

        card.classList.add('flipped');

        if (!app.firstMemoryCard) {
            app.firstMemoryCard = card;
            return;
        }

        if (app.firstMemoryCard.dataset.pairId === card.dataset.pairId) {
            app.firstMemoryCard.classList.add('matched');
            card.classList.add('matched');
            app.firstMemoryCard = null;
            app.memoryPairsFound += 1;
            app.addPoint('memory', 'memoryScore');
            helpers.setFeedback('memoryFeedback', 'Doğru çift!', true);
            app.speak('Harika, doğru cevap!');

            if (app.memoryPairsFound === 4) {
                helpers.setFeedback('memoryFeedback', 'Tüm kartları hatırladın!', true);
                setTimeout(app.showResultScreen, 900);
            }
            return;
        }

        app.lockMemoryBoard = true;
        helpers.setFeedback('memoryFeedback', 'Farklı kartlar. Tekrar dene.', false);
        app.speak('Tekrar dene, ipucuna dikkat et.');
        setTimeout(() => {
            app.firstMemoryCard.classList.remove('flipped');
            card.classList.remove('flipped');
            app.firstMemoryCard = null;
            app.lockMemoryBoard = false;
        }, 800);
    },

    // Golge Nerede oyunu
    startShadowGame() {
        app.shadowIndex = 0;
        app.scores.shadow = 0;
        document.getElementById('shadowScore').textContent = 0;
        app.showScreen('shadowScreen');
        app.loadShadowQuestion();
        app.speak('Gölge Nerede oyunu başladı. Işığın yönüne bak ve gölgenin nereye düşeceğini seç.');
    },

    loadShadowQuestion() {
        const shadow = gameData.shadows[app.shadowIndex];
        document.getElementById('shadowQuestion').textContent = shadow.light;
        document.getElementById('shadowScene').className = `shadow-scene ${shadow.sceneClass}`;
        document.getElementById('shadowScene').innerHTML = '';
        document.getElementById('shadowNextBtn').classList.add('hidden');
        helpers.clearFeedback('shadowFeedback');

        const options = ['Sağa', 'Sola', 'Yukarı', 'Aşağıya', 'Arkaya', 'Işığın üstüne'];
        const optionGrid = document.getElementById('shadowOptions');
        optionGrid.innerHTML = '';
        const optionSet = helpers.shuffle(options.filter(option => option !== shadow.answer)).slice(0, 3);
        optionSet.push(shadow.answer);

        helpers.shuffle(optionSet).forEach(option => {
            const button = document.createElement('button');
            button.className = 'option-btn';
            button.textContent = option;
            button.onclick = () => app.checkShadowAnswer(option, shadow.answer);
            optionGrid.appendChild(button);
        });
    },

    checkShadowAnswer(answer, correctAnswer) {
        app.disableButtons('shadowOptions');
        if (answer === correctAnswer) {
            app.addPoint('shadow', 'shadowScore');
            helpers.setFeedback('shadowFeedback', 'Doğru! Gölge ışığın ters tarafındadır.', true);
            app.speak('Harika, doğru cevap!');
        } else {
            const shadow = gameData.shadows[app.shadowIndex];
            helpers.setFeedback('shadowFeedback', `Yanlış. ${shadow.explanation}`, false);
            app.speak('Tekrar dene, ipucuna dikkat et.');
        }
        document.getElementById('shadowNextBtn').classList.remove('hidden');
    },

    nextShadowQuestion() {
        app.shadowIndex += 1;
        if (app.shadowIndex >= gameData.shadows.length) {
            app.showResultScreen();
            return;
        }
        app.loadShadowQuestion();
    },

    // Sonuc ve rozet ekrani
    showResultScreen() {
        const total = app.getTotalScore();
        const badge = app.getBadge(total);
        const badgeIcon = document.getElementById('badgeIcon');
        const badgeTitle = document.getElementById('badgeTitle');
        const badgeMessage = document.getElementById('badgeMessage');

        document.getElementById('totalScore').textContent = total;
        badgeIcon.textContent = badge.icon;
        badgeTitle.textContent = badge.title;
        badgeMessage.textContent = badge.message;

        app.showScreen('resultScreen');
        app.speak(`Sonuç ekranı. Toplam puanın ${total}. Rozetin: ${badge.title}.`);
    },

    getBadge(total) {
        if (total > 100) {
            return {
                icon: '🏆',
                title: 'Usta Sanatçı',
                message: 'Tebrikler! Sanat bilgilerini çok dikkatli kullandın.'
            };
        }

        if (total >= 71) {
            return {
                icon: '🔍',
                title: 'Sanat Dedektifi',
                message: 'Harika! İpuçlarını iyi takip ettin.'
            };
        }

        if (total >= 41) {
            return {
                icon: '🎨',
                title: 'Gelişen Sanatçı',
                message: 'Güzel ilerliyorsun. Birkaç oyun daha seni güçlendirir.'
            };
        }

        return {
            icon: '⭐',
            title: 'Yeni Başlayan Sanatçı',
            message: 'Başlangıç güzel! Öğrenmeye devam et.'
        };
    },

    resetAllScores() {
        app.scores = {
            find: 0,
            material: 0,
            matching: 0,
            memory: 0,
            shadow: 0
        };
        ['findScore', 'materialScore', 'matchingScore', 'memoryScore', 'shadowScore'].forEach(elementId => {
            const scoreElement = document.getElementById(elementId);
            if (scoreElement) {
                scoreElement.textContent = 0;
            }
        });
        app.updateScoreDisplays();
        app.showScreen('mainMenu');
        app.speak('Oyun sıfırlandı. Ana menüye döndün.');
    },

    disableButtons(containerId) {
        document.querySelectorAll(`#${containerId} button`).forEach(button => {
            button.disabled = true;
        });
    }
};

// ========== SAYFA YUKLENDIGINDE ==========
document.addEventListener('DOMContentLoaded', () => {
    app.showScreen('mainMenu');
    app.updateScoreDisplays();
});

// HTML icindeki onclick baglantilari icin uygulamayi global yap.
window.app = app;
