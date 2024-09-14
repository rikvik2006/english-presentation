const slidesData = [
	{
		id: "disfatta",
		numero: "00.",
		intro: "(disfatta)",
		content:
			"Il primo giorno è stato molto diverso da come me lo aspettavo, a causa della disorganizzazione dell'azienda. Avevo già dei pregiudizi su questa esperienza e questo evento li ha confermati.",
		img: "/img/img0.png",
		settimana: "settimana 1",
		data: "17 / 06 / 2024",
		topic: "none",
		linkNext: "/slidePrev/primoGiorno",
		linkPrev: "/slidePrev/ultimiGiorni",
	},
	{
		id: "primoGiorno",
		numero: "01.",
		intro: "(primoGiorno)",
		content:
			"Il primo giorno ho configurato circa 20 PLC. Ho imparato a cosa servono e in dove vengono utilizzati. Questa giornata è stata una delle migliori, soprattutto perché mi hanno affidato una grande responsabilità, dato che ogni PLC costava circa 3000€.",
		img: "/img/img1.png",
		settimana: "settimana 1",
		data: "18 / 06 / 2024",
		topic: "configurazione plc",
		linkNext: "/slidePrev/configurazionePc",
		linkPrev: "/slidePrev/disfatta",
	},
	{
		id: "configurazionePc",
		numero: "02.",
		intro: "(configurazionePc)",
		content:
			"Questi due giorni sono stati i migliori! Mi hanno fatto configurare dei PC che poi verranno spediti in tutto il mondo. La parte più bella è stata risolvere i problemi.",
		img: "/img/img2.png",
		settimana: "settimana 1",
		data: "19-20 / 06 / 2024",
		topic: "configurazione pc",
		linkNext: "/slidePrev/noia",
		linkPrev: "/slidePrev/primoGiorno",
	},
	{
		id: "noia",
		numero: "03.",
		intro: "(noia)",
		content:
			"L'ultimo giorno della prima settimana è stato abbastanza noioso. Dato che i problemi erano stati risolti, ho dovuto solo configurare PC per tutto il giorno.",
		img: "/img/img3.png",
		settimana: "settimana 1",
		data: "21 / 06 / 2024",
		topic: "configurazione pc",
		linkNext: "/slidePrev/miniCorso",
		linkPrev: "/slidePrev/configurazionePc",
	},
	{
		id: "miniCorso",
		numero: "04.",
		intro: "(miniCorso)",
		content:
			"ho finito di configurare i pc ed infine ho fatto un mini corso di come funzionano i principali tipi di saldature della plastica",
		img: "/img/img4.png",
		settimana: "settimana 2",
		data: "24 / 06 / 2024",
		topic: "pc/saldatura",
		linkNext: "/slidePrev/ultimiGiorni",
		linkPrev: "/slidePrev/noia",
	},
	{
		id: "ultimiGiorni",
		numero: "05.",
		intro: "(ultimiGiorni)",
		content:
			"in questi 4 giorni non ho fatto molto, ho fatto solo piccole task, e nel tempo libero ho realizzato il design per questo sito. ",
		img: "/img/img5.png",
		settimana: "settimana 2",
		data: "25-27 / 06 / 2024",
		topic: "piccole task",
		linkNext: "/slidePrev/disfatta",
		linkPrev: "/slidePrev/miniCorso",
	},
];

export default slidesData;
