import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";

const createNewi18n = ({ lng }) => {
	const newi18n = i18n.createInstance();

	newi18n
		.use(Backend)
		.use(LanguageDetector)
		.init({
			debug         : false,
			fallbackLng   : lng,
			interpolation : { escapeValue : false },
			lng,
		});

	return newi18n;
};

export default createNewi18n;