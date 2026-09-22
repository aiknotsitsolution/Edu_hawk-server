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
    <div className="ckeditor-list-editor border border-gray-300 rounded-xl overflow-hidden bg-white shadow-sm">
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
