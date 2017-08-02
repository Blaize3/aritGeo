'use-strict';

module.exports = {
	aritGeo: (sequence) => {

	// check squence type
	if (typeof(sequence) == typeof([])){
		if (sequence.length == 0){
			return 0;
		}else{
			// if sequence is an array
			// declare variables
			let commonDiff = sequence[1] - sequence[0];
			let commonRatio = sequence[0]/ sequence[1];
			let isAPSequence = true;
			let isGPSequence = true;
			let isNonNumeric = true;

				// loop through array and check if sequence element are of type number
				for (let i = 0; i < (sequence.length - 1); i++){
					if (typeof(sequence[i]) !== typeof(2)){
						isNonNumeric = false;
						break;
					}
				}

				// loop through array and check if sequence is an arithmetic progression
				for (let i = 0; i < (sequence.length - 1); i++){
					if (sequence[i+1] - sequence[i]  != commonDiff){
						isAPSequence = false;
						break;
					}
				}

				// loop through array and check if sequence is a geometric progression
				for (let i = 0; i < (sequence.length - 1); i++){
					if (sequence[i] / sequence[i+1]  != commonRatio){
						isGPSequence = false;
						break;
					}
				}

			//check test variables and determine output
			if (isGPSequence){
				return "Geometric";
			}else if (isAPSequence){
				return "Arithmetic";
			}else{
				return -1;
			}
		
		}
	}

	// if sequence is not an array, return undefined
	return "undefined"
}//end aritGeo function express
}//end module.export