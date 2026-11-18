import React, { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import {
  ClassicEditor,
  Bold,
  Essentials,
  Italic,
  Underline,
  Strikethrough,
  Paragraph,
  Heading,
  Font,
  Link,
  List,
  BlockQuote,
  Table,
  TableToolbar,
  TableProperties,
  TableCellProperties,
  TableColumnResize,
  TableCaption,
  Image,
  ImageUpload,
  ImageToolbar,
  ImageStyle,
  ImageCaption,
  ImageResize,
  MediaEmbed,
  Undo,
  Alignment,
  PasteFromOffice,
  RemoveFormat,
} from "ckeditor5";
import { Eye, X, Monitor, Smartphone } from "lucide-react";
import DOMPurify from "dompurify";

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
  const [showPreview, setShowPreview] = useState(false);
  const [previewDevice, setPreviewDevice] = useState("desktop");

  return (
    <div className="ckeditor-list-editor border border-gray-300 rounded-xl overflow-hidden bg-white shadow-sm">
      {/* Editor Top Bar with Preview Feature */}
      <div className="flex items-center justify-between border-b border-gray-200 bg-slate-50/90 px-4 py-2.5">
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            Blog Editor
          </span>
          <span className="hidden sm:inline-block text-[11px] text-slate-400">
            • Stretch table borders to resize • Click cell for properties
          </span>
        </div>
        <button
          type="button"
          onClick={() => setShowPreview(true)}
          className="inline-flex items-center gap-1.5 rounded-lg border border-indigo-200 bg-white px-3 py-1.5 text-xs font-semibold text-indigo-600 shadow-xs hover:bg-indigo-50 hover:border-indigo-300 transition cursor-pointer"
          title="Preview formatted content"
        >
          <Eye size={14} className="text-indigo-600" />
          Preview Content
        </button>
      </div>

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
            Heading,
            Font, // Font Family + Font Size + Color
            Link,
            List,
            BlockQuote,
            Table,
            TableToolbar,
            TableProperties,
            TableCellProperties,
            TableColumnResize,
            TableCaption,
            Image,
            ImageUpload,
            ImageToolbar,
            ImageStyle,
            ImageCaption,
            ImageResize,
            MediaEmbed,
            Alignment,
            Undo,
            PasteFromOffice,
            RemoveFormat,
            CustomUploadAdapterPlugin,
          ],
          toolbar: {
            items: [
              "undo",
              "redo",
              "|",
              "heading",
              "|",
              "fontFamily",
              "fontSize", // ← yahan se size change karo
              "|",
              "bold",
              "italic",
              "underline",
              "strikethrough",
              "removeFormat",
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

          // Heading options for rich blog writing
          heading: {
            options: [
              {
                model: "paragraph",
                title: "Paragraph",
                class: "ck-heading_paragraph",
              },
              {
                model: "heading1",
                view: "h1",
                title: "Heading 1",
                class: "ck-heading_heading1",
              },
              {
                model: "heading2",
                view: "h2",
                title: "Heading 2",
                class: "ck-heading_heading2",
              },
              {
                model: "heading3",
                view: "h3",
                title: "Heading 3",
                class: "ck-heading_heading3",
              },
              {
                model: "heading4",
                view: "h4",
                title: "Heading 4",
                class: "ck-heading_heading4",
              },
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
              "|",
              "resizeImage",
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
            tableProperties: {
              defaultProperties: {
                borderStyle: "solid",
                borderColor: "#cbd5e1",
                borderWidth: "1px",
                alignment: "center",
                width: "100%",
              },
            },
            tableCellProperties: {
              defaultProperties: {
                padding: "12px",
                borderColor: "#cbd5e1",
                borderStyle: "solid",
                borderWidth: "1px",
                verticalAlignment: "middle",
              },
            },
          },

          placeholder: placeholder || "Write a detailed product description...",
        }}
      />

      {/* Live Content Preview Modal */}
      {showPreview && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4 backdrop-blur-xs animate-in fade-in duration-150"
          onClick={() => setShowPreview(false)}
        >
          <div
            className="flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-slate-200 bg-slate-50 px-6 py-4">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600">
                  <Eye size={18} />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-slate-900">
                    Content Preview
                  </h3>
                  <p className="text-xs text-slate-500">
                    Live rendered preview of your tables, spacing, and formatting
                  </p>
                </div>
              </div>

              {/* Device Preview Switches & Close */}
              <div className="flex items-center gap-2">
                <div className="hidden sm:flex items-center rounded-lg border border-slate-200 bg-white p-0.5 text-xs">
                  <button
                    type="button"
                    onClick={() => setPreviewDevice("desktop")}
                    className={`flex items-center gap-1 rounded-md px-2.5 py-1 font-medium transition cursor-pointer ${
                      previewDevice === "desktop"
                        ? "bg-indigo-600 text-white shadow-xs"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    <Monitor size={13} />
                    Desktop
                  </button>
                  <button
                    type="button"
                    onClick={() => setPreviewDevice("mobile")}
                    className={`flex items-center gap-1 rounded-md px-2.5 py-1 font-medium transition cursor-pointer ${
                      previewDevice === "mobile"
                        ? "bg-indigo-600 text-white shadow-xs"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    <Smartphone size={13} />
                    Mobile
                  </button>
                </div>

                <button
                  type="button"
                  onClick={() => setShowPreview(false)}
                  className="rounded-lg p-2 text-slate-400 hover:bg-slate-200 hover:text-slate-700 transition cursor-pointer"
                  title="Close preview"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Modal Content (Seamless) */}
            <div className="flex-1 overflow-y-auto bg-white p-4 sm:p-8 flex justify-center">
              <div
                className={`w-full transition-all duration-200 ${
                  previewDevice === "mobile"
                    ? "max-w-[400px] rounded-2xl border border-slate-200 bg-white p-5 shadow-md"
                    : "max-w-3xl"
                }`}
              >
                {value && value.trim() ? (
                  <div
                    className="ck-content overflow-x-auto max-w-full"
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(value, {
                        ADD_ATTR: ["style", "target"],
                        ADD_TAGS: ["iframe"],
                      }),
                    }}
                  />
                ) : (
                  <div className="py-12 text-center text-slate-400">
                    <p className="text-sm font-medium">No content to preview yet.</p>
                    <p className="text-xs mt-1">Start typing or insert a table in the editor to preview.</p>
                  </div>
                )}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="flex items-center justify-between border-t border-slate-200 bg-white px-6 py-3 text-xs text-slate-500">
              <span>Preview mode • All table styles & dimensions applied</span>
              <button
                type="button"
                onClick={() => setShowPreview(false)}
                className="rounded-lg bg-slate-100 px-4 py-2 font-medium text-slate-700 hover:bg-slate-200 transition cursor-pointer"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DescriptionEditor;
