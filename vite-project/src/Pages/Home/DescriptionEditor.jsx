// // import React, { useEffect, useRef, useState, useCallback } from "react";
// // import {
// //   useEditor,
// //   EditorContent,
// //   NodeViewWrapper,
// //   ReactNodeViewRenderer,
// // } from "@tiptap/react";
// // import { Extension, Node, mergeAttributes } from "@tiptap/core";

// // import StarterKit from "@tiptap/starter-kit";
// // import Placeholder from "@tiptap/extension-placeholder";
// // import Underline from "@tiptap/extension-underline";
// // import Link from "@tiptap/extension-link";
// // import TextAlign from "@tiptap/extension-text-align";
// // import { TextStyle } from "@tiptap/extension-text-style";
// // import Color from "@tiptap/extension-color";
// // import Highlight from "@tiptap/extension-highlight";
// // import FontFamily from "@tiptap/extension-font-family";
// // import BulletList from "@tiptap/extension-bullet-list";
// // import OrderedList from "@tiptap/extension-ordered-list";
// // import ListItem from "@tiptap/extension-list-item";
// // import { Table } from "@tiptap/extension-table";
// // import { TableRow } from "@tiptap/extension-table-row";
// // import { TableHeader } from "@tiptap/extension-table-header";
// // import { TableCell } from "@tiptap/extension-table-cell";

// // import {
// //   Bold, Italic, Underline as UnderlineIcon, Strikethrough,
// //   Undo, Redo, AlignLeft, AlignCenter, AlignRight, AlignJustify,
// //   List, ListOrdered, Link2, ImagePlus, Table2, Highlighter,
// //   Eye, Edit3, Save,
// // } from "lucide-react";

// // // ─── TablePicker Component ────────────────────────────────────────────────────
// // const TablePicker = ({ onInsert }) => {
// //   const [hovered, setHovered] = useState({ r: 0, c: 0 });
// //   const [open, setOpen]       = useState(false);
// //   const ref                   = useRef(null);
// //   const MAX = 8;

// //   useEffect(() => {
// //     if (!open) return;
// //     const close = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
// //     document.addEventListener("mousedown", close);
// //     return () => document.removeEventListener("mousedown", close);
// //   }, [open]);

// //   const insert = (r, c) => {
// //     onInsert(r, c);
// //     setOpen(false);
// //     setHovered({ r: 0, c: 0 });
// //   };

// //   return (
// //     <div ref={ref} style={{ position: "relative", display: "inline-flex" }}>
// //       <Tooltip text="Insert table">
// //         <button
// //           type="button"
// //           aria-label="Insert table"
// //           onClick={() => setOpen(v => !v)}
// //           className={`h-8 min-w-8 px-2 flex items-center justify-center border text-sm
// //             ${open ? "bg-[#dbeafe] border-[#93c5fd] text-blue-700" : "bg-white hover:bg-gray-100 border-gray-300"}`}
// //         >
// //           <Table2 size={16}/>
// //         </button>
// //       </Tooltip>

// //       {open && (
// //         <div style={{
// //           position: "absolute",
// //           top: "calc(100% + 4px)",
// //           left: 0,
// //           background: "#fff",
// //           border: "1px solid #e2e8f0",
// //           borderRadius: 8,
// //           padding: "10px",
// //           boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
// //           zIndex: 9999,
// //           userSelect: "none",
// //         }}>
// //           <div style={{ fontSize: 11, color: "#64748b", marginBottom: 6, textAlign: "center", fontWeight: 500 }}>
// //             {hovered.r > 0 && hovered.c > 0
// //               ? `${hovered.r} × ${hovered.c} table`
// //               : "Hover to select size"}
// //           </div>
// //           <div style={{ display: "grid", gridTemplateColumns: `repeat(${MAX}, 20px)`, gap: 3 }}>
// //             {Array.from({ length: MAX * MAX }).map((_, i) => {
// //               const row = Math.floor(i / MAX) + 1;
// //               const col = (i % MAX) + 1;
// //               const active = row <= hovered.r && col <= hovered.c;
// //               return (
// //                 <div
// //                   key={i}
// //                   onMouseEnter={() => setHovered({ r: row, c: col })}
// //                   onMouseLeave={() => setHovered({ r: 0, c: 0 })}
// //                   onClick={() => insert(row, col)}
// //                   style={{
// //                     width: 20, height: 20,
// //                     border: `1.5px solid ${active ? "#2563eb" : "#cbd5e1"}`,
// //                     borderRadius: 3,
// //                     background: active ? "#dbeafe" : "#f8fafc",
// //                     cursor: "pointer",
// //                     transition: "background 0.08s, border-color 0.08s",
// //                   }}
// //                 />
// //               );
// //             })}
// //           </div>
// //           <div style={{ marginTop: 8, borderTop: "1px solid #f1f5f9", paddingTop: 6, display: "flex", gap: 4 }}>
// //             {[[2,2],[3,3],[4,4],[3,5]].map(([r,c]) => (
// //               <button
// //                 key={`${r}x${c}`}
// //                 type="button"
// //                 onClick={() => insert(r, c)}
// //                 style={{
// //                   flex: 1, fontSize: 10, padding: "3px 0",
// //                   background: "#f1f5f9", border: "1px solid #e2e8f0",
// //                   borderRadius: 4, cursor: "pointer", color: "#475569", fontWeight: 500,
// //                 }}
// //               >
// //                 {r}×{c}
// //               </button>
// //             ))}
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // // ─── Tooltip Component ────────────────────────────────────────────────────────
// // const Tooltip = ({ text, children }) => {
// //   const [visible, setVisible] = useState(false);
// //   const [pos, setPos] = useState({ top: 0, left: 0 });
// //   const ref = useRef(null);

// //   const show = () => {
// //     if (ref.current) {
// //       const rect = ref.current.getBoundingClientRect();
// //       setPos({
// //         top: rect.bottom + window.scrollY + 6,
// //         left: rect.left + window.scrollX + rect.width / 2,
// //       });
// //     }
// //     setVisible(true);
// //   };
// //   const hide = () => setVisible(false);

// //   return (
// //     <span ref={ref} style={{ position: "relative", display: "inline-flex" }}
// //       onMouseEnter={show} onMouseLeave={hide} onFocus={show} onBlur={hide}>
// //       {children}
// //       {visible && (
// //         <span style={{
// //           position: "fixed",
// //           top: pos.top,
// //           left: pos.left,
// //           transform: "translateX(-50%)",
// //           background: "#1e293b",
// //           color: "#f1f5f9",
// //           fontSize: 11,
// //           fontWeight: 500,
// //           padding: "4px 8px",
// //           borderRadius: 5,
// //           whiteSpace: "nowrap",
// //           pointerEvents: "none",
// //           zIndex: 9999,
// //           letterSpacing: "0.01em",
// //           boxShadow: "0 2px 8px rgba(0,0,0,0.25)",
// //         }}>
// //           {text}
// //           <span style={{
// //             position: "absolute",
// //             top: -4,
// //             left: "50%",
// //             transform: "translateX(-50%)",
// //             width: 0,
// //             height: 0,
// //             borderLeft: "4px solid transparent",
// //             borderRight: "4px solid transparent",
// //             borderBottom: "4px solid #1e293b",
// //           }}/>
// //         </span>
// //       )}
// //     </span>
// //   );
// // };

// // // ─── FontSize Extension ───────────────────────────────────────────────────────
// // const FontSize = Extension.create({
// //   name: "fontSize",
// //   addOptions() { return { types: ["textStyle"] }; },
// //   addGlobalAttributes() {
// //     return [{
// //       types: this.options.types,
// //       attributes: {
// //         fontSize: {
// //           default: null,
// //           parseHTML: (el) => el.style.fontSize || null,
// //           renderHTML: (attrs) => attrs.fontSize ? { style: `font-size: ${attrs.fontSize}` } : {},
// //         },
// //       },
// //     }];
// //   },
// //   addCommands() {
// //     return {
// //       setFontSize: (fontSize) => ({ chain }) => chain().setMark("textStyle", { fontSize }).run(),
// //       unsetFontSize: () => ({ chain }) => chain().setMark("textStyle", { fontSize: null }).run(),
// //     };
// //   },
// // });

// // // ─── Image Icons ──────────────────────────────────────────────────────────────
// // const IconFloatLeft = () => (
// //   <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
// //     <rect x="1" y="1" width="6" height="6" rx="1"/>
// //     <rect x="9" y="2" width="6" height="1.5" rx="0.5"/>
// //     <rect x="9" y="5" width="4" height="1.5" rx="0.5"/>
// //     <rect x="1" y="9" width="14" height="1.5" rx="0.5"/>
// //     <rect x="1" y="12" width="12" height="1.5" rx="0.5"/>
// //   </svg>
// // );
// // const IconFloatRight = () => (
// //   <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
// //     <rect x="9" y="1" width="6" height="6" rx="1"/>
// //     <rect x="1" y="2" width="6" height="1.5" rx="0.5"/>
// //     <rect x="1" y="5" width="4" height="1.5" rx="0.5"/>
// //     <rect x="1" y="9" width="14" height="1.5" rx="0.5"/>
// //     <rect x="1" y="12" width="12" height="1.5" rx="0.5"/>
// //   </svg>
// // );
// // const IconNoFloat = () => (
// //   <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
// //     <rect x="4" y="1" width="8" height="6" rx="1"/>
// //     <rect x="1" y="9" width="14" height="1.5" rx="0.5"/>
// //     <rect x="1" y="12" width="11" height="1.5" rx="0.5"/>
// //   </svg>
// // );

// // // ─── ImageResizeComponent ─────────────────────────────────────────────────────
// // const ImageResizeComponent = ({ node, updateAttributes, selected }) => {
// //   const [showToolbar, setShowToolbar] = useState(false);
// //   const [widthInput, setWidthInput]   = useState("");
// //   const [heightInput, setHeightInput] = useState("");
// //   const imgRef      = useRef(null);
// //   const startX      = useRef(0);
// //   const startW      = useRef(0);
// //   const aspectRatio = useRef(1);

// //   const width  = node.attrs.width  || null;
// //   const height = node.attrs.height || null;
// //   const float  = node.attrs.float  || "none";
// //   const vAlign = node.attrs.vAlign || "middle";

// //   useEffect(() => {
// //     if (showToolbar && imgRef.current) {
// //       setWidthInput(width  ?? imgRef.current.offsetWidth);
// //       setHeightInput(height ?? imgRef.current.offsetHeight);
// //     }
// //   }, [showToolbar]);

// //   const onMouseDown = useCallback((e, corner) => {
// //     e.preventDefault();
// //     e.stopPropagation();
// //     const img = imgRef.current;
// //     if (!img) return;
// //     startX.current = e.clientX;
// //     startW.current = img.offsetWidth;
// //     aspectRatio.current = img.offsetWidth / img.offsetHeight;

// //     const onMove = (ev) => {
// //       const dx = ev.clientX - startX.current;
// //       const newW = Math.max(50, corner === "sw" || corner === "nw"
// //         ? startW.current - dx
// //         : startW.current + dx);
// //       const newH = Math.round(newW / aspectRatio.current);
// //       updateAttributes({ width: newW, height: newH });
// //       setWidthInput(newW);
// //       setHeightInput(newH);
// //     };
// //     const onUp = () => {
// //       document.removeEventListener("mousemove", onMove);
// //       document.removeEventListener("mouseup", onUp);
// //     };
// //     document.addEventListener("mousemove", onMove);
// //     document.addEventListener("mouseup", onUp);
// //   }, [updateAttributes]);

// //   const applySize = () => {
// //     const w = parseInt(widthInput);
// //     const h = parseInt(heightInput);
// //     if (w > 0 && h > 0) updateAttributes({ width: w, height: h });
// //   };

// //   const handleWChange = (val) => {
// //     setWidthInput(val);
// //     const w = parseInt(val);
// //     if (w > 0) setHeightInput(Math.round(w / aspectRatio.current));
// //   };
// //   const handleHChange = (val) => {
// //     setHeightInput(val);
// //     const h = parseInt(val);
// //     if (h > 0) setWidthInput(Math.round(h * aspectRatio.current));
// //   };

// //   const handleImgLoad = () => {
// //     if (imgRef.current)
// //       aspectRatio.current = imgRef.current.naturalWidth / imgRef.current.naturalHeight;
// //   };

// //   const wrapperStyle = {
// //     display: "inline-block",
// //     position: "relative",
// //     lineHeight: 0,
// //     ...(float === "left"  && { float: "left",  marginRight: 12, marginBottom: 8 }),
// //     ...(float === "right" && { float: "right", marginLeft: 12,  marginBottom: 8 }),
// //     ...(float === "none"  && { display: "block", margin: "8px auto" }),
// //     verticalAlign: vAlign,
// //   };

// //   const corner = {
// //     position: "absolute", width: 10, height: 10,
// //     background: "#2563eb", border: "2px solid white",
// //     borderRadius: 2, zIndex: 10,
// //   };

// //   const active = selected || showToolbar;

// //   const tbBtn = (isActive) => ({
// //     background: isActive ? "#2563eb" : "#334155",
// //     color: "white", border: "none", borderRadius: 4,
// //     padding: "2px 7px", fontSize: 11, cursor: "pointer",
// //     display: "flex", alignItems: "center", gap: 3,
// //   });

// //   return (
// //     <NodeViewWrapper style={wrapperStyle} onClick={() => setShowToolbar(v => !v)}>
// //       <img
// //         ref={imgRef}
// //         src={node.attrs.src}
// //         alt={node.attrs.alt || ""}
// //         onLoad={handleImgLoad}
// //         draggable={false}
// //         style={{
// //           width:  width  ? `${width}px`  : "auto",
// //           height: height ? `${height}px` : "auto",
// //           maxWidth: "100%",
// //           display: "block",
// //           outline: active ? "2px solid #2563eb" : "none",
// //           cursor: "pointer",
// //           userSelect: "none",
// //           verticalAlign: vAlign,
// //         }}
// //       />

// //       {active && (
// //         <>
// //           <div onMouseDown={e => onMouseDown(e,"nw")} style={{...corner, top:-5,  left:-5,  cursor:"nw-resize"}}/>
// //           <div onMouseDown={e => onMouseDown(e,"ne")} style={{...corner, top:-5,  right:-5, cursor:"ne-resize"}}/>
// //           <div onMouseDown={e => onMouseDown(e,"sw")} style={{...corner, bottom:-5,left:-5, cursor:"sw-resize"}}/>
// //           <div onMouseDown={e => onMouseDown(e,"se")} style={{...corner, bottom:-5,right:-5,cursor:"se-resize"}}/>

// //           <div
// //             onClick={e => e.stopPropagation()}
// //             style={{
// //               position: "absolute",
// //               top: -90,
// //               left: "50%",
// //               transform: "translateX(-50%)",
// //               background: "#1e293b",
// //               borderRadius: 8,
// //               padding: "6px 10px",
// //               display: "flex",
// //               flexDirection: "column",
// //               gap: 5,
// //               zIndex: 20,
// //               whiteSpace: "nowrap",
// //               boxShadow: "0 4px 16px rgba(0,0,0,0.35)",
// //               minWidth: 320,
// //             }}
// //           >
// //             <div style={{ display:"flex", alignItems:"center", gap:5 }}>
// //               <span style={{ color:"#94a3b8", fontSize:11 }}>W</span>
// //               <input type="number" value={widthInput}
// //                 onChange={e => handleWChange(e.target.value)}
// //                 onKeyDown={e => e.key==="Enter" && applySize()}
// //                 style={{ width:55, background:"#334155", color:"white", border:"1px solid #475569", borderRadius:4, padding:"2px 4px", fontSize:12 }}
// //               />
// //               <span style={{ color:"#94a3b8", fontSize:11 }}>H</span>
// //               <input type="number" value={heightInput}
// //                 onChange={e => handleHChange(e.target.value)}
// //                 onKeyDown={e => e.key==="Enter" && applySize()}
// //                 style={{ width:55, background:"#334155", color:"white", border:"1px solid #475569", borderRadius:4, padding:"2px 4px", fontSize:12 }}
// //               />
// //               <button onClick={applySize} style={tbBtn(false)}>Apply</button>
// //               <button onClick={() => { updateAttributes({ width:null, height:null }); setShowToolbar(false); }} style={tbBtn(false)}>Reset</button>
// //             </div>

// //             <div style={{ display:"flex", alignItems:"center", gap:5, borderTop:"1px solid #334155", paddingTop:5 }}>
// //               <span style={{ color:"#94a3b8", fontSize:11 }}>Float:</span>
// //               <button onClick={() => updateAttributes({ float:"left" })}  style={tbBtn(float==="left")}  title="Float Left">
// //                 <IconFloatLeft /> Left
// //               </button>
// //               <button onClick={() => updateAttributes({ float:"none" })}  style={tbBtn(float==="none")}  title="No Float">
// //                 <IconNoFloat /> None
// //               </button>
// //               <button onClick={() => updateAttributes({ float:"right" })} style={tbBtn(float==="right")} title="Float Right">
// //                 <IconFloatRight /> Right
// //               </button>

// //               <span style={{ color:"#94a3b8", fontSize:11, marginLeft:6 }}>Align:</span>
// //               <button onClick={() => updateAttributes({ vAlign:"top" })}    style={tbBtn(vAlign==="top")}    title="Vertical Top">Top</button>
// //               <button onClick={() => updateAttributes({ vAlign:"middle" })} style={tbBtn(vAlign==="middle")} title="Vertical Middle">Mid</button>
// //               <button onClick={() => updateAttributes({ vAlign:"bottom" })} style={tbBtn(vAlign==="bottom")} title="Vertical Bottom">Bot</button>
// //             </div>
// //           </div>
// //         </>
// //       )}
// //     </NodeViewWrapper>
// //   );
// // };

// // // ─── ResizableImage Node ──────────────────────────────────────────────────────
// // const ResizableImage = Node.create({
// //   name: "resizableImage",
// //   group: "inline",
// //   inline: true,
// //   draggable: true,
// //   atom: true,

// //   addAttributes() {
// //     return {
// //       src:    { default: null },
// //       alt:    { default: null },
// //       title:  { default: null },
// //       width:  { default: null },
// //       height: { default: null },
// //       float:  { default: "none" },
// //       vAlign: { default: "middle" },
// //     };
// //   },

// //   parseHTML() { return [{ tag: "img[src]" }]; },

// //   renderHTML({ HTMLAttributes }) {
// //     const { width, height, float: f, vAlign, ...rest } = HTMLAttributes;
// //     const styles = [
// //       width  ? `width:${width}px`   : "",
// //       height ? `height:${height}px` : "",
// //       f && f !== "none" ? `float:${f}` : "",
// //       vAlign ? `vertical-align:${vAlign}` : "",
// //     ].filter(Boolean).join(";");
// //     return ["img", mergeAttributes(rest, styles ? { style: styles } : {})];
// //   },

// //   addNodeView() {
// //     return ReactNodeViewRenderer(ImageResizeComponent);
// //   },
// // });

// // // ─── Constants ────────────────────────────────────────────────────────────────
// // const fonts = ["Arial","Calibri","Times New Roman","Verdana","Georgia","Courier New"];
// // const fontSizes = ["12px","14px","16px","18px","20px","24px","28px","32px"];

// // // ─── Table + Editor global styles ────────────────────────────────────────────
// // const EDITOR_STYLES = `
// //   .ProseMirror table {
// //     border-collapse: collapse;
// //     width: 100%;
// //     margin: 12px 0;
// //     table-layout: fixed;
// //     overflow: hidden;
// //   }
// //   .ProseMirror table td,
// //   .ProseMirror table th {
// //     border: 1.5px solid #cbd5e1;
// //     padding: 8px 12px;
// //     min-width: 60px;
// //     vertical-align: top;
// //     position: relative;
// //     box-sizing: border-box;
// //     font-size: 14px;
// //     line-height: 1.5;
// //   }
// //   .ProseMirror table th {
// //     background: #f1f5f9;
// //     font-weight: 600;
// //     color: #1e293b;
// //     text-align: left;
// //   }
// //   .ProseMirror table td {
// //     background: #fff;
// //     color: #334155;
// //   }
// //   .ProseMirror table tr:hover td {
// //     background: #f8fafc;
// //   }
// //   .ProseMirror table .selectedCell:after {
// //     z-index: 2;
// //     position: absolute;
// //     content: "";
// //     left: 0; right: 0; top: 0; bottom: 0;
// //     background: rgba(37, 99, 235, 0.12);
// //     pointer-events: none;
// //   }
// //   .ProseMirror table .column-resize-handle {
// //     position: absolute;
// //     right: -2px;
// //     top: 0; bottom: 0;
// //     width: 4px;
// //     background: #2563eb;
// //     cursor: col-resize;
// //     z-index: 20;
// //   }
// //   .ProseMirror .tableWrapper {
// //     overflow-x: auto;
// //     margin: 8px 0;
// //   }
// //   .ProseMirror p.is-editor-empty:first-child::before {
// //     content: attr(data-placeholder);
// //     float: left;
// //     color: #adb5bd;
// //     pointer-events: none;
// //     height: 0;
// //   }
// // `;

// // // ─── Main Editor ──────────────────────────────────────────────────────────────
// // const DescriptionEditor = ({ value = "", onChange, placeholder = "Write content...", onSubmit }) => {
// //   const [fontSize, setFontSize]                 = useState("16px");
// //   const [isPreviewMode, setIsPreviewMode]       = useState(false);
// //   const [submittedContent, setSubmittedContent] = useState("");
// //   const [tableMenu, setTableMenu]               = useState(null); // { x, y } | null
// //   const fileInputRef  = useRef(null);
// //   const editorWrapRef = useRef(null);

// //   const editor = useEditor({
// //     extensions: [
// //       StarterKit.configure({ bulletList:false, orderedList:false, listItem:false }),
// //       Placeholder.configure({ placeholder }),
// //       Underline,
// //       Link.configure({ openOnClick:false, HTMLAttributes:{ class:"text-blue-600 underline" } }),
// //       ResizableImage,
// //       TextStyle,
// //       FontSize,
// //       Color,
// //       Highlight,
// //       FontFamily,
// //       TextAlign.configure({ types:["heading","paragraph"] }),
// //       BulletList.configure({ HTMLAttributes:{ class:"list-disc pl-6" } }),
// //       OrderedList.configure({ HTMLAttributes:{ class:"list-decimal pl-6" } }),
// //       ListItem,
// //       Table.configure({ resizable:true }),
// //       TableRow, TableHeader, TableCell,
// //     ],
// //     content: value,
// //     onUpdate: ({ editor }) => onChange?.(editor.getHTML()),
// //     editorProps: {
// //       attributes: { class:"prose max-w-none min-h-[350px] p-5 focus:outline-none" },
// //     },
// //   });

// //   useEffect(() => {
// //     if (editor && value !== editor.getHTML()) editor.commands.setContent(value);
// //   }, [value, editor]);

// //   useEffect(() => {
// //     if (!editor) return;
// //     const update = () => {
// //       const { from, to, empty } = editor.state.selection;
// //       if (empty) {
// //         setFontSize(editor.getAttributes("textStyle").fontSize || "16px");
// //       } else {
// //         let size = "16px";
// //         editor.state.doc.nodesBetween(from, to, (node) => {
// //           if (size !== "16px") return false;
// //           if (node.isText)
// //             node.marks.forEach(m => { if (m.type.name==="textStyle" && m.attrs.fontSize) size = m.attrs.fontSize; });
// //         });
// //         setFontSize(size);
// //       }
// //     };
// //     editor.on("selectionUpdate", update);
// //     editor.on("update", update);
// //     return () => { editor.off("selectionUpdate", update); editor.off("update", update); };
// //   }, [editor]);

// //   const handleSubmit = () => {
// //     if (!editor) return;
// //     const html = editor.getHTML();
// //     setSubmittedContent(html);
// //     onSubmit?.(html);
// //     setIsPreviewMode(true);
// //   };

// //   // Close table context menu on outside click
// //   useEffect(() => {
// //     if (!tableMenu) return;
// //     const close = () => setTableMenu(null);
// //     document.addEventListener("mousedown", close);
// //     return () => document.removeEventListener("mousedown", close);
// //   }, [tableMenu]);

// //   const handleContextMenu = (e) => {
// //     if (!editor) return;
// //     // Only show menu when cursor is inside a table cell
// //     const inTable = editor.isActive("tableCell") || editor.isActive("tableHeader");
// //     if (!inTable) return;
// //     e.preventDefault();
// //     setTableMenu({ x: e.clientX, y: e.clientY });
// //   };

// //   // ─── Shared image inserter ────────────────────────────────────────────────
// //   const insertImageFile = useCallback((file) => {
// //     if (!file || !file.type.startsWith("image/")) return;
// //     const reader = new FileReader();
// //     reader.onload = () => {
// //       if (typeof reader.result === "string")
// //         editor.chain().focus().insertContent({ type: "resizableImage", attrs: { src: reader.result } }).run();
// //     };
// //     reader.readAsDataURL(file);
// //   }, [editor]);

// //   // ─── Drag & Drop handlers ─────────────────────────────────────────────────
// //   const [isDragging, setIsDragging] = useState(false);

// //   const handleDragOver = (e) => {
// //     if (!e.dataTransfer.types.includes("Files")) return;
// //     e.preventDefault();
// //     e.dataTransfer.dropEffect = "copy";
// //     setIsDragging(true);
// //   };
// //   const handleDragLeave = (e) => {
// //     if (!editorWrapRef.current?.contains(e.relatedTarget)) setIsDragging(false);
// //   };
// //   const handleDrop = (e) => {
// //     setIsDragging(false);
// //     const files = Array.from(e.dataTransfer.files).filter(f => f.type.startsWith("image/"));
// //     if (!files.length) return;
// //     e.preventDefault();
// //     e.stopPropagation();
// //     files.forEach(insertImageFile);
// //   };

// //   // ─── Paste handler ────────────────────────────────────────────────────────
// //   const handlePaste = useCallback((e) => {
// //     const items = Array.from(e.clipboardData?.items || []);
// //     const imgItem = items.find(i => i.type.startsWith("image/"));
// //     if (!imgItem) return;
// //     e.preventDefault();
// //     insertImageFile(imgItem.getAsFile());
// //   }, [insertImageFile]);

// //   if (!editor) return null;

// //   // ─── Toolbar Button ─────────────────────────────────────────────────────────
// //   const TB = ({ onClick, active, children, tooltip }) => (
// //     <Tooltip text={tooltip}>
// //       <button
// //         type="button"
// //         onClick={onClick}
// //         aria-label={tooltip}
// //         className={`h-8 min-w-8 px-2 flex items-center justify-center border text-sm
// //           ${active ? "bg-[#dbeafe] border-[#93c5fd] text-blue-700" : "bg-white hover:bg-gray-100 border-gray-300"}`}
// //       >
// //         {children}
// //       </button>
// //     </Tooltip>
// //   );

// //   const changeFontSize = (size) => {
// //     setFontSize(size);
// //     editor.chain().focus().setFontSize(size).run();
// //   };

// //   const addLink = () => {
// //     const prev = editor.getAttributes("link").href;
// //     const url = prompt(prev ? `Current: ${prev}\nNew URL:` : "Enter URL:", prev || "https://");
// //     if (url === null) return;
// //     if (!url || url === "https://") editor.chain().focus().unsetLink().run();
// //     else editor.chain().focus().setLink({ href: url }).run();
// //   };

// //   const handleImageUpload = (e) => {
// //     const file = e.target.files?.[0];
// //     if (file) insertImageFile(file);
// //     e.target.value = "";
// //   };

// //   return (
// //     <div className="border border-gray-300 bg-white rounded-lg" style={{ overflow: "visible" }}>

// //       {/* Inject table + editor styles */}
// //       <style>{EDITOR_STYLES}</style>

// //       {/* ── Sticky header: top bar + toolbar ── */}
// //       <div style={{ position: "sticky", top: 0, zIndex: 50, borderRadius: "8px 8px 0 0", overflow: "visible" }}>

// //         {/* Top bar */}

// //         {/* Toolbar (only in edit mode) */}
// //         {!isPreviewMode && (
// //           <div className="border-b bg-[#f3f3f3] p-2 flex flex-wrap items-center gap-1">

// //             <Tooltip text="Font family">
// //               <select
// //                 className="h-8 border border-gray-400 px-2 text-sm bg-white rounded"
// //                 onChange={e => editor.chain().focus().setFontFamily(e.target.value).run()}
// //                 aria-label="Font family"
// //               >
// //                 {fonts.map(f => <option key={f} value={f}>{f}</option>)}
// //               </select>
// //             </Tooltip>

// //             <Tooltip text="Font size">
// //               <select
// //                 value={fontSize}
// //                 onChange={e => changeFontSize(e.target.value)}
// //                 className="h-8 border border-gray-400 px-2 text-sm bg-white rounded"
// //                 aria-label="Font size"
// //               >
// //                 {fontSizes.map(s => <option key={s} value={s}>{s}</option>)}
// //               </select>
// //             </Tooltip>

// //             <TB tooltip="Bold (Ctrl+B)"      active={editor.isActive("bold")}      onClick={() => editor.chain().focus().toggleBold().run()}><Bold size={16}/></TB>
// //             <TB tooltip="Italic (Ctrl+I)"    active={editor.isActive("italic")}    onClick={() => editor.chain().focus().toggleItalic().run()}><Italic size={16}/></TB>
// //             <TB tooltip="Underline (Ctrl+U)" active={editor.isActive("underline")} onClick={() => editor.chain().focus().toggleUnderline().run()}><UnderlineIcon size={16}/></TB>
// //             <TB tooltip="Strikethrough"      active={editor.isActive("strike")}    onClick={() => editor.chain().focus().toggleStrike().run()}><Strikethrough size={16}/></TB>

// //             <Tooltip text="Text color">
// //               <input
// //                 type="color"
// //                 aria-label="Text color"
// //                 onInput={e => editor.chain().focus().setColor(e.target.value).run()}
// //                 className="w-8 h-8 border cursor-pointer rounded"
// //               />
// //             </Tooltip>

// //             <TB tooltip="Highlight text" active={editor.isActive("highlight")} onClick={() => editor.chain().focus().toggleHighlight().run()}><Highlighter size={16}/></TB>

// //             <TB tooltip="Align left"    active={editor.isActive({textAlign:"left"})}    onClick={() => editor.chain().focus().setTextAlign("left").run()}><AlignLeft size={16}/></TB>
// //             <TB tooltip="Align center"  active={editor.isActive({textAlign:"center"})}  onClick={() => editor.chain().focus().setTextAlign("center").run()}><AlignCenter size={16}/></TB>
// //             <TB tooltip="Align right"   active={editor.isActive({textAlign:"right"})}   onClick={() => editor.chain().focus().setTextAlign("right").run()}><AlignRight size={16}/></TB>
// //             <TB tooltip="Justify"       active={editor.isActive({textAlign:"justify"})} onClick={() => editor.chain().focus().setTextAlign("justify").run()}><AlignJustify size={16}/></TB>

// //             <TB tooltip="Bullet list"  active={editor.isActive("bulletList")}  onClick={() => editor.chain().focus().toggleBulletList().run()}><List size={16}/></TB>
// //             <TB tooltip="Ordered list" active={editor.isActive("orderedList")} onClick={() => editor.chain().focus().toggleOrderedList().run()}><ListOrdered size={16}/></TB>

// //             <TB tooltip="Insert / edit link" active={editor.isActive("link")} onClick={addLink}><Link2 size={16}/></TB>

// //             <TB tooltip="Insert image" onClick={() => fileInputRef.current?.click()}><ImagePlus size={16}/></TB>
// //             <input ref={fileInputRef} type="file" accept="image/*" className="hidden" onChange={handleImageUpload}/>

// //             {/* Table picker */}
// //             <TablePicker onInsert={(r, c) => editor.chain().focus().insertTable({ rows: r, cols: c, withHeaderRow: true }).run()} />

// //             <TB tooltip="Undo (Ctrl+Z)" onClick={() => editor.chain().focus().undo().run()}><Undo size={16}/></TB>
// //             <TB tooltip="Redo (Ctrl+Y)" onClick={() => editor.chain().focus().redo().run()}><Redo size={16}/></TB>
// //           </div>
// //         )}
// //       </div>{/* end sticky */}

// //       {/* Editor / Preview area */}
// //       <div className="min-h-[400px]">
// //         {!isPreviewMode ? (
// //           <div
// //             ref={editorWrapRef}
// //             onContextMenu={handleContextMenu}
// //             onDragOver={handleDragOver}
// //             onDragLeave={handleDragLeave}
// //             onDrop={handleDrop}
// //             onPaste={handlePaste}
// //             style={{ position: "relative" }}
// //           >
// //             {/* Drag-over overlay */}
// //             {isDragging && (
// //               <div style={{
// //                 position: "absolute", inset: 0, zIndex: 40,
// //                 background: "rgba(37,99,235,0.07)",
// //                 border: "2.5px dashed #2563eb",
// //                 borderRadius: 6,
// //                 display: "flex", alignItems: "center", justifyContent: "center",
// //                 pointerEvents: "none",
// //               }}>
// //                 <div style={{
// //                   background: "#fff",
// //                   border: "1.5px solid #93c5fd",
// //                   borderRadius: 10,
// //                   padding: "14px 28px",
// //                   color: "#2563eb",
// //                   fontWeight: 600,
// //                   fontSize: 15,
// //                   display: "flex", alignItems: "center", gap: 10,
// //                   boxShadow: "0 4px 16px rgba(37,99,235,0.12)",
// //                 }}>
// //                   <ImagePlus size={22}/> Drop image to insert
// //                 </div>
// //               </div>
// //             )}
// //             <EditorContent editor={editor}/>
// //           </div>
// //         ) : (
// //           <div className="p-8 prose max-w-none bg-white min-h-[400px]">
// //             <div dangerouslySetInnerHTML={{ __html: editor.getHTML() }}/>
// //           </div>
// //         )}
// //       </div>

// //       {/* Table right-click context menu */}
// //       {tableMenu && (
// //         <div
// //           onMouseDown={e => e.stopPropagation()}
// //           style={{
// //             position: "fixed",
// //             top: tableMenu.y,
// //             left: tableMenu.x,
// //             background: "#fff",
// //             border: "1px solid #e2e8f0",
// //             borderRadius: 8,
// //             boxShadow: "0 8px 24px rgba(0,0,0,0.14)",
// //             zIndex: 9999,
// //             minWidth: 200,
// //             padding: "4px 0",
// //             fontSize: 13,
// //           }}
// //         >
// //           {[
// //             { label: "➕ Add row above",    action: () => editor.chain().focus().addRowBefore().run() },
// //             { label: "➕ Add row below",     action: () => editor.chain().focus().addRowAfter().run() },
// //             { label: "➕ Add column before", action: () => editor.chain().focus().addColumnBefore().run() },
// //             { label: "➕ Add column after",  action: () => editor.chain().focus().addColumnAfter().run() },
// //             null,
// //             { label: "🗑 Delete row",        action: () => editor.chain().focus().deleteRow().run() },
// //             { label: "🗑 Delete column",     action: () => editor.chain().focus().deleteColumn().run() },
// //             null,
// //             { label: "🗑 Delete table",      action: () => editor.chain().focus().deleteTable().run(), danger: true },
// //           ].map((item, i) =>
// //             item === null ? (
// //               <div key={i} style={{ height: 1, background: "#f1f5f9", margin: "4px 0" }}/>
// //             ) : (
// //               <button
// //                 key={i}
// //                 type="button"
// //                 onClick={() => { item.action(); setTableMenu(null); }}
// //                 style={{
// //                   display: "block",
// //                   width: "100%",
// //                   textAlign: "left",
// //                   padding: "7px 16px",
// //                   background: "none",
// //                   border: "none",
// //                   cursor: "pointer",
// //                   color: item.danger ? "#dc2626" : "#1e293b",
// //                   fontWeight: item.danger ? 500 : 400,
// //                 }}
// //                 onMouseEnter={e => e.currentTarget.style.background = item.danger ? "#fef2f2" : "#f8fafc"}
// //                 onMouseLeave={e => e.currentTarget.style.background = "none"}
// //               >
// //                 {item.label}
// //               </button>
// //             )
// //           )}
// //         </div>
// //       )}

// //       {submittedContent && (
// //         <div className="border-t bg-gray-50 p-6">
// //           <h3 className="text-lg font-semibold mb-3 text-gray-700">Submitted Content:</h3>
// //           <div className="prose max-w-none bg-white p-6 border rounded-lg"
// //             dangerouslySetInnerHTML={{ __html: submittedContent }}/>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default DescriptionEditor;

// import React from "react";
// import { CKEditor } from "@ckeditor/ckeditor5-react";
// import {
//   ClassicEditor,
//   Bold,
//   Essentials,
//   Italic,
//   Underline,
//   Strikethrough,
//   Paragraph,
//   Heading,
//   Font, // ← yeh single plugin fontFamily + fontSize + color deta hai
//   Link,
//   List,
//   BlockQuote,
//   Table,
//   TableToolbar,
//   Image,
//   ImageUpload,
//   ImageToolbar,
//   ImageStyle,
//   ImageCaption,
//   MediaEmbed,
//   Undo,
//   Alignment, // text align ke liye
// } from "ckeditor5";

// import "ckeditor5/ckeditor5.css";

// // ====================== Custom Upload Adapter ======================
// function CustomUploadAdapterPlugin(editor) {
//   editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
//     return new CustomUploadAdapter(loader);
//   };
// }

// class CustomUploadAdapter {
//   constructor(loader) {
//     this.loader = loader;
//   }

//   async upload() {
//     const file = await this.loader.file;
//     const formData = new FormData();
//     formData.append("image", file);

//     try {
//       const res = await fetch(
//         "https://edu-hawk-server.onrender.com/api/upload-description-image",
//         {
//           method: "POST",
//           body: formData,
//         },
//       );

//       const data = await res.json();

//       if (!data.success) {
//         throw new Error(data.message || "Upload failed");
//       }

//       return {
//         default: data.url,
//       };
//     } catch (err) {
//       console.error("Image upload error:", err);
//       throw err;
//     }
//   }

//   abort() {}
// }

// // ====================== Component ======================
// const DescriptionEditor = ({ value = "", onChange, placeholder }) => {
//   return (
//     <div className="border border-gray-300 rounded-xl overflow-hidden bg-white shadow-sm">
//       <CKEditor
//         editor={ClassicEditor}
//         data={value}
//         onChange={(event, editor) => {
//           const data = editor.getData();
//           onChange(data);
//         }}
//         config={{
//           licenseKey: "GPL",
//           plugins: [
//             Essentials,
//             Bold,
//             Italic,
//             Underline,
//             Strikethrough,
//             Paragraph,

//             Font, // Font Family + Font Size + Color
//             Link,
//             List,
//             BlockQuote,
//             Table,
//             TableToolbar,
//             Image,
//             ImageUpload,
//             ImageToolbar,
//             ImageStyle,
//             ImageCaption,
//             MediaEmbed,
//             Alignment,
//             Undo,
//             CustomUploadAdapterPlugin,
//           ],
//           toolbar: {
//             items: [
//               "undo",
//               "redo",
//               "|",
//               "heading",
//               "|",
//               "fontFamily",
//               "fontSize",
//               "|",
//               "bold",
//               "italic",
//               "underline",
//               "strikethrough",
//               "|",
//               "fontColor",
//               "fontBackgroundColor",
//               "|",
//               "alignment",
//               "|",
//               "link",
//               "bulletedList",
//               "numberedList",
//               "|",
//               "blockQuote",
//               "insertTable",
//               "|",
//               "imageUpload",
//               "mediaEmbed",
//             ],
//           },

//           // ---------- Heading options ----------

//           // ---------- Font Family (TipTap jaisa) ----------
//           fontFamily: {
//             options: [
//               "default",
//               "Arial, Helvetica, sans-serif",
//               "Calibri, Candara, Segoe, sans-serif",
//               "Courier New, Courier, monospace",
//               "Georgia, serif",
//               "Lucida Sans Unicode, Lucida Grande, sans-serif",
//               "Tahoma, Geneva, sans-serif",
//               "Times New Roman, Times, serif",
//               "Trebuchet MS, Helvetica, sans-serif",
//               "Verdana, Geneva, sans-serif",
//             ],
//             supportAllValues: true,
//           },

//           // ---------- Font Size (bada / chhota karne ke liye) ----------
//           fontSize: {
//             options: [
//               8,
//               9,
//               10,
//               11,
//               12,
//               13,
//               14,
//               15,
//               "default",
//               16,
//               18,
//               20,
//               22,
//               24,
//               26,
//               28,
//               30,
//               32,
//               36,
//               40,
//               44,
//               48,
//               56,
//               64,
//               72,
//             ],
//             supportAllValues: true,
//           },

//           // ---------- Alignment ----------
//           alignment: {
//             options: ["left", "center", "right", "justify"],
//           },

//           // ---------- Image ----------
//           image: {
//             toolbar: [
//               "imageTextAlternative",
//               "toggleImageCaption",
//               "imageStyle:inline",
//               "imageStyle:block",
//               "imageStyle:side",
//             ],
//           },

//           // ---------- Table ----------
//           table: {
//             contentToolbar: [
//               "tableColumn",
//               "tableRow",
//               "mergeTableCells",
//               "tableProperties",
//               "tableCellProperties",
//             ],
//           },

//           placeholder: placeholder || "Write a detailed product description...",
//         }}
//       />
//     </div>
//   );
// };

// export default DescriptionEditor;

import React from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import {
  ClassicEditor,
  Bold,
  Essentials,
  Italic,
  Underline,
  Strikethrough,
  Paragraph,
  Font,
  Link,
  List,
  BlockQuote,
  Table,
  TableToolbar,
  Image,
  ImageUpload,
  ImageToolbar,
  ImageStyle,
  ImageCaption,
  MediaEmbed,
  Undo,
  Alignment,
} from "ckeditor5";

import "ckeditor5/ckeditor5.css";

// ====================== Custom Upload Adapter ======================
function CustomUploadAdapterPlugin(editor) {
  editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
    return new CustomUploadAdapter(loader);
  };
}

class CustomUploadAdapter {
  constructor(loader) {
    this.loader = loader;
  }

  async upload() {
    const file = await this.loader.file;
    const formData = new FormData();
    formData.append("image", file);

    try {
      const res = await fetch(
        "https://edu-hawk-server.onrender.com/api/upload-description-image",
        {
          method: "POST",
          body: formData,
        },
      );

      const data = await res.json();

      if (!data.success) {
        throw new Error(data.message || "Upload failed");
      }

      return {
        default: data.url,
      };
    } catch (err) {
      console.error("Image upload error:", err);
      throw err;
    }
  }

  abort() {}
}

// ====================== Component ======================
const DescriptionEditor = ({ value = "", onChange, placeholder }) => {
  return (
    <div className="border border-gray-300 rounded-xl overflow-hidden bg-white shadow-sm">
      <CKEditor
        editor={ClassicEditor}
        data={value}
        onChange={(event, editor) => {
          const data = editor.getData();
          onChange(data);
        }}
        config={{
          licenseKey: "GPL",
          plugins: [
            Essentials,
            Bold,
            Italic,
            Underline,
            Strikethrough,
            Paragraph,
            Font, // Font Family + Font Size + Color
            Link,
            List,
            BlockQuote,
            Table,
            TableToolbar,
            Image,
            ImageUpload,
            ImageToolbar,
            ImageStyle,
            ImageCaption,
            MediaEmbed,
            Alignment,
            Undo,
            CustomUploadAdapterPlugin,
          ],
          toolbar: {
            items: [
              "undo",
              "redo",
              "|",
              "fontFamily",
              "fontSize", // ← yahan se size change karo
              "|",
              "bold",
              "italic",
              "underline",
              "strikethrough",
              "|",
              "fontColor",
              "fontBackgroundColor",
              "|",
              "alignment",
              "|",
              "link",
              "bulletedList",
              "numberedList",
              "|",
              "blockQuote",
              "insertTable",
              "|",
              "imageUpload",
              "mediaEmbed",
            ],
          },

          // Font Family
          fontFamily: {
            options: [
              "default",
              "Arial, Helvetica, sans-serif",
              "Calibri, Candara, Segoe, sans-serif",
              "Courier New, Courier, monospace",
              "Georgia, serif",
              "Lucida Sans Unicode, Lucida Grande, sans-serif",
              "Tahoma, Geneva, sans-serif",
              "Times New Roman, Times, serif",
              "Trebuchet MS, Helvetica, sans-serif",
              "Verdana, Geneva, sans-serif",
            ],
            supportAllValues: true,
          },

          // Font Size (clear numbers – youcanedit jaisa)
          fontSize: {
            options: [
              8,
              9,
              10,
              11,
              12,
              13,
              14,
              15,
              "default",
              16,
              18,
              20,
              22,
              24,
              26,
              28,
              30,
              32,
              36,
              40,
              44,
              48,
              56,
              64,
              72,
            ],
            supportAllValues: true,
          },

          alignment: {
            options: ["left", "center", "right", "justify"],
          },

          image: {
            toolbar: [
              "imageTextAlternative",
              "toggleImageCaption",
              "imageStyle:inline",
              "imageStyle:block",
              "imageStyle:side",
            ],
          },

          table: {
            contentToolbar: [
              "tableColumn",
              "tableRow",
              "mergeTableCells",
              "tableProperties",
              "tableCellProperties",
            ],
          },

          placeholder: placeholder || "Write a detailed product description...",
        }}
      />
    </div>
  );
};

export default DescriptionEditor;
