function solution(s) {
	const expression = /([a-z])\1{1,}/;
	while (s.search(expression) !== -1) {
		s = s.split("");
		s.splice(s.join("").search(expression), 2);
		s = s.join("");
	}
	return s.length ? 0 : 1;
}

console.log(solution("baabaa"));
