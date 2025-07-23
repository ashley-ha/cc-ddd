from manim import *

class DebuggingDuck(Scene):
    def construct(self):
        # Create the duck body (ellipse)
        body = Ellipse(width=3, height=2, color=YELLOW, fill_opacity=1)
        body.shift(DOWN * 0.5)
        
        # Create the duck head (circle)
        head = Circle(radius=1, color=YELLOW, fill_opacity=1)
        head.shift(UP * 1.2)
        
        # Create the beak (triangle)
        beak = Triangle(color=ORANGE, fill_opacity=1)
        beak.scale(0.3)
        beak.rotate(PI/2)
        beak.shift(UP * 1.2 + RIGHT * 0.8)
        
        # Create the eye
        eye = Dot(point=UP * 1.4 + RIGHT * 0.3, color=BLACK, radius=0.15)
        
        # Create the wing (smaller ellipse)
        wing = Ellipse(width=1.5, height=0.8, color=GOLD, fill_opacity=1)
        wing.shift(RIGHT * 0.3 + DOWN * 0.3)
        
        # Group all duck parts
        duck = VGroup(body, head, beak, eye, wing)
        
        # Create speech bubble
        bubble = RoundedRectangle(
            width=4, height=2,
            corner_radius=0.3,
            color=WHITE,
            fill_opacity=1,
            stroke_color=BLACK,
            stroke_width=2
        )
        bubble.shift(UP * 2 + RIGHT * 3)
        
        # Create speech bubble tail (small triangle pointing to duck)
        tail = Triangle(color=WHITE, fill_opacity=1, stroke_color=BLACK, stroke_width=2)
        tail.scale(0.2)
        tail.rotate(-PI/4)
        tail.shift(UP * 1.2 + RIGHT * 1.8)
        
        # Create text for the speech bubble
        advice_text = Text(
            "Let's debug with\nClaude Code!",
            font_size=24,
            color=BLACK
        )
        advice_text.move_to(bubble.get_center())
        
        # Animation sequence
        self.play(
            FadeIn(duck, shift=UP * 0.5),
            run_time=1.5
        )
        
        # Duck bobs slightly
        self.play(
            duck.animate.shift(UP * 0.1),
            rate_func=there_and_back,
            run_time=0.5
        )
        
        # Speech bubble appears
        self.play(
            FadeIn(bubble),
            FadeIn(tail),
            run_time=0.8
        )
        
        # Text types in
        self.play(
            Write(advice_text),
            run_time=1.5
        )
        
        # Hold the scene
        self.wait(2)
        
        # Duck nods (subtle rotation)
        self.play(
            duck.animate.rotate(0.1),
            rate_func=there_and_back,
            run_time=0.6
        )
        
        self.wait(1)

class DuckIntroduction(Scene):
    def construct(self):
        # Create a simpler version for intro
        body = Ellipse(width=2, height=1.5, color=YELLOW, fill_opacity=1)
        head = Circle(radius=0.8, color=YELLOW, fill_opacity=1)
        head.shift(UP * 0.8)
        beak = Triangle(color=ORANGE, fill_opacity=1)
        beak.scale(0.2)
        beak.rotate(PI/2)
        beak.shift(UP * 0.8 + RIGHT * 0.6)
        eye = Dot(point=UP * 1 + RIGHT * 0.2, color=BLACK, radius=0.12)
        
        duck = VGroup(body, head, beak, eye)
        duck.shift(LEFT * 3)
        
        # Title
        title = Text("Meet Your Debugging Duck", font_size=36, color=BLUE)
        title.to_edge(UP)
        
        # Animation
        self.play(Write(title))
        self.play(FadeIn(duck, shift=RIGHT))
        
        # Duck waddles to center
        self.play(
            duck.animate.shift(RIGHT * 3),
            run_time=2,
            rate_func=linear
        )
        
        self.wait(1)