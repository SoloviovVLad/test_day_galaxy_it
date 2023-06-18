import header from './components/header';
import documentReady from './helpers/documentReady';
import viewHeight from './helpers/viewHeight';
import lazyImages from './modules/lazyImages';

documentReady(() => {
	// console.log('Document is ready');
	header();
	viewHeight();
	lazyImages();
});
