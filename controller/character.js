myApp.controller('CharacterController', ['$scope', '$http', 'FetchingDataThroughAPI', function($scope, $http, FetchingDataThroughAPI){
	console.log('Character Controller Loaded...')
	
	FetchingDataThroughAPI.ajaxCall('characters')
	.then(function(resultedCharacter){
		var arrCharacter = [];
		
		resultedCharacter.data.forEach(function(element){
			if(arrCharacter == null || element.books.length == 1) {
				if(arrCharacter.indexOf(element.books[0].slice(-1)) <= -1){
					var a = element.books[0].slice(-1)
					arrCharacter.push(a)
				}
				
			} else {
				for(var i in element.books){
					if( arrCharacter.indexOf(element.books[i].slice(-1)) <= -1){
						var a = element.books[i].slice(-1)
						arrCharacter.push(a)
					}
				}
			}
		})
		console.log(arrCharacter)
		arrCharacter.forEach(function(arrElement){
			var bookCharacter = 'books/'+arrElement
			FetchingDataThroughAPI.ajaxCall(bookCharacter)
			.then(function(characterResut){
				var characterNames=[];
				for(var i in characterResut.data.characters){
					var parts = (characterResut.data.characters[i]).split('/');
					var result = parts[parts.length - 1];
					var characters = 'characters/'+result
					FetchingDataThroughAPI.ajaxCall(characters)
					.then(function(characters){
						console.log('Done with fetching characters...')
						if(characterNames.indexOf(characters.data.name) <= -1){
							characterNames.push(characters.data.name)
							console.log(characterNames)
						}
					
					})
				}
				$scope.character_Names = characterNames
			})
		})
	})

}])