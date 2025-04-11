import Editor from "@monaco-editor/react"
import { useRef } from "react"
import { Button } from "@/components/ui/button";

export const EditorComponent = () => {
    const lineHeight = 20; // You can also read it from theme if you want
  const editorHeight = 30 * lineHeight + 20; // add a bit of padding
    function handleEditorChange() {
        console.log('here is the current model value:');
      }

      function showValue() {
        console.log('Hello');
      }
    //   const handleBeforeMount = (monaco:any) => {
    //     monaco.editor.defineTheme("vim-oldschool", {
    //       base: "vs-dark", // Base theme
    //       inherit: true,
    //       rules: [
    //         { token: "", foreground: "00FF00", background: "000000" }, // default text
    //         { token: "comment", foreground: "5F875F", fontStyle: "italic" },
    //         { token: "keyword", foreground: "FF5F00", fontStyle: "bold" },
    //         { token: "string", foreground: "AFD700" },
    //         { token: "number", foreground: "00AFFF" },
    //         { token: "identifier", foreground: "87FFAF" },
    //         { token: "delimiter", foreground: "00FF00" },
    //       ],
    //       colors: {
    //         "editor.background": "#426584",
    //         "editor.foreground": "#00FF00",
    //         "editor.lineHighlightBackground": "#002B36",
    //         "editorCursor.foreground": "#00FF00",
    //         "editorLineNumber.foreground": "#444444",
    //         "editor.selectionBackground": "#005F5F80",
    //         "editor.inactiveSelectionBackground": "#003F3F50",
    //       },
    //     });
    //   };
    const handleBeforeMount = (monaco: any) => {
        monaco.editor.defineTheme("monokai-custom", {
          base: "vs-dark", // Monokai is dark-based
          inherit: true,
          rules: [
            { token: "", foreground: "F8F8F2", background: "272822" }, // default text
            { token: "comment", foreground: "75715E", fontStyle: "italic" },
            { token: "keyword", foreground: "F92672", fontStyle: "bold" },
            { token: "number", foreground: "AE81FF" },
            { token: "string", foreground: "E6DB74" },
            { token: "type", foreground: "66D9EF" },
            { token: "function", foreground: "A6E22E" },
            { token: "delimiter", foreground: "F8F8F2" },
          ],
          colors: {
            "editor.background": "#272822",
            "editor.foreground": "#F8F8F2",
            "editor.lineHighlightBackground": "#3E3D32",
            "editorCursor.foreground": "#F8F8F0",
            "editorLineNumber.foreground": "#8F908A",
            "editor.selectionBackground": "#49483E",
            "editor.inactiveSelectionBackground": "#3E3D32",
          },
        });
      };
      
      const code=`
      package main

import (
	"fmt"
	"strings"
)

// Check if number is prime
func isPrime(n int) bool {
	if n < 2 {
		return false
	}
	for i := 2; i*i <= n; i++ {
		if n%i == 0 {
			return false
		}
	}
	return true
}

// Generate Fibonacci series
func fibonacci(n int) []int {
	seq := make([]int, n)
	if n > 0 {
		seq[0] = 0
	}
	if n > 1 {
		seq[1] = 1
	}
	for i := 2; i < n; i++ {
		seq[i] = seq[i-1] + seq[i-2]
	}
	return seq
}

// Reverse a string
func reverseString(s string) string {
	runes := []rune(s)
	for i, j := 0, len(runes)-1; i < j; i, j = i+1, j-1 {
		runes[i], runes[j] = runes[j], runes[i]
	}
	return string(runes)
}

func main() {
	var n int
	var text string

	fmt.Print("Enter a number: ")
	fmt.Scan(&n)

	fmt.Println("Is prime:", is

      `
      const code2=JSON.stringify(code)
      const code3=JSON.parse(code2)
     return(
        <>
        {/* <Button style={{margin:"1rem"}} onClick={showValue}>Show value</Button> */}
        <div className="m-1 w-full sm:w-[60%]">
        <Editor
            height={`${editorHeight}px`} // Set editor height dynamically based on 20 lines
            width={`100%`}
            defaultLanguage="go"
            defaultValue={code3}
            onChange={handleEditorChange}
            options={{
                cursorStyle: "block", // block cursor like Vim
                cursorBlinking: "phase", // blinking style, options: 'blink', 'smooth', 'phase', 'expand', 'solid'
                fontSize: 18,
                minimap: { enabled: false},
                scrollBeyondLastLine: false,
                lineNumbers: 'on',
                scrollbar: {
                    vertical: "visible",
                    horizontal: "visible",
                    useShadows: true,
                    verticalScrollbarSize: 8,
                    horizontalScrollbarSize: 8,
                    alwaysConsumeMouseWheel: false,
                    handleMouseWheel: true,
                    arrowSize: 0,
                  },
              }}
              theme="monokai-custom"
              beforeMount={handleBeforeMount}
         />
        </div>
      </>
    )
}