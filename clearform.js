function clearInput(fieldId) {
	// Pass this function the ID of a form field to have its contents erased on focus.
	if (!document.getElementById || !document.getElementById(fieldId)) {
		return;
	}
	document.getElementById(fieldId).onfocus = function() {
		if (this.value == this.defaultValue) {
			this.value = '';
		}
	};
	document.getElementById(fieldId).onblur = function() {
		if (this.value == '') {
			this.value = this.defaultValue;
		}
	};
}

function checkFormField(formId,fieldId) {
	if (!document.getElementById || !document.getElementById(formId) || !document.getElementById(fieldId)) {
		return;
	}
	clearInput(fieldId);
	document.getElementById(formId).checkField = fieldId;
	document.getElementById(formId).onsubmit = function() {
		if (document.getElementById(this.checkField).value == document.getElementById(this.checkField).defaultValue) {
			return false;
		}
	};
}

window.onload = function() {
	checkFormField('signup','MERGE0')
};