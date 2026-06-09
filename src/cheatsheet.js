import { marked } from "marked";
import content from "../cheatsheet/content.md?raw";
import "./style.css";

document.getElementById("content").innerHTML = marked.parse(content);
