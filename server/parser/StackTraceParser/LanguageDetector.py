from constants.language_detection import LANGUAGE_EXTENSIONS, DETECTION_WORDS, PATTERNS
import re

class LanguageDetector:

    def __init__(self, stack_trace:str):
        self.stack_trace = stack_trace

    def extension_scoring(self) -> dict[str, int]:
        """Dumb Function for detecting and scoring based on detected programming language extensions(E.g: .py, .java, .cpp, .js, .tsx, etc)
        It adds 5 to each language if extension is found in stack trace, else keeps it 0. 

        """
        stack_trace = self.stack_trace.lower().strip()

        scores= {}

        for lang, ext_list in LANGUAGE_EXTENSIONS.items():
            scores[lang] = 0

            #ext scores
            if any(ext for ext in ext_list if ext.lower() in stack_trace):
                scores[lang]+=2
            
        return scores

    def word_detection_scoring(self) -> dict[str, int]:

        """Dumb Function for detecting and scoring based on common found words in stack traces. E.g: "Traceback (most recent call last):", etc.
        It adds 5 to each language if extension is found in stack trace, else keeps it 0. 
        """

        stack_trace = self.stack_trace.lower().strip()

        scores = {}

        for lang, detection_word_list in DETECTION_WORDS.items():
            scores[lang] = 0
            if any(detection_word.lower() in stack_trace for detection_word in detection_word_list) :
                scores[lang] += 5
                    
        return scores

    def pattern_scoring(self) -> dict[str, int]:

        scores= {}

        for lang, pattern in PATTERNS.items():
            scores[lang] = 0
            if any(match for match in re.finditer(pattern, self.stack_trace, re.MULTILINE)):
                    scores[lang] +=10

        return scores

    def calculate_final_score(self):
        final_scores = {}

        for lang in self.pattern_scoring().keys():
            
            final_scores[lang] = self.extension_scoring().get(lang) + self.pattern_scoring().get(lang) + self.word_detection_scoring().get(lang)

        return final_scores

    def calculate_confidence_score(self):

        confidence_scores={}

        final_scores = self.calculate_final_score()

        total_scores = sum(final_scores.values())

        for lang, score in final_scores.items():
            confidence_scores[lang] = score/total_scores

        return confidence_scores        
    
    def detect_language(self):

        final_scores = self.calculate_final_score()
        confidence_scores = self.calculate_confidence_score()
        max_confidence_score = max(confidence_scores.values())


        for lang, score in confidence_scores.items():
            if score == max_confidence_score:
                return {
                    "language" : lang,
                    "confidence_score": score,
                    "total_scores": final_scores
                }
                








                



