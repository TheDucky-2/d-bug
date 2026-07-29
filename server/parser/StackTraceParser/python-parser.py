import re

SEPARATOR_PATTERN = r'(?:During\ handling\ of\ the\ above\ exception,\ another\ exception\ occurred:|The\ above\ exception\ was\ the\ direct\ cause\ of\ the\ following\ exception:)$'
PARSING_PATTERNS=

class PythonParser:

    def __init__(self, stack_trace):
        self.stack_trace = stack_trace


    def get_frames(self):
        data = {}
        frames = []
        frame_pattern = r'\s+File\s+"(?P<file>[^"]+)",\s+line\s+(?P<line>\d+),\s+in\s+(?P<function>.+)'

        for match in re.finditer(frame_pattern, trace, re.MULTILINE):
            frame = {
                "file": match.group("file"),
                "line" : match.group("line"),
                "function": match.group("function")
            }

            frames.append(frame)

        data["frames"] = frames

        return data

    def get_

