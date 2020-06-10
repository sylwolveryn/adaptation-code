const getName = () => document.querySelectorAll("div[class^='MyProfile_name']");
let id;
const execute = () => {
	const name = getName();
	if (name.length) {
		console.log(name[0].innerText.trim());
		clearInterval(id);
	} else {
		console.log('loading');
	}
}
id = setInterval(execute, 500);
