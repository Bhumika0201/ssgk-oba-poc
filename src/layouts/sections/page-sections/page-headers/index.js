/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// Sections components
import PdfViewer from "components/PDFViewer/PdfViewer";
import BaseLayout from "layouts/sections/components/BaseLayout";
import pines from "./pines.pdf";
function PageHeaders() {
  return (
    <BaseLayout
      title="Pines 2023 - 24"
      breadcrumb={[{ label: "PINES", route: "/sections/page-sections/pines" }, { label: "PINES" }]}
    >
      <PdfViewer fileUrl={pines} />
    </BaseLayout>
  );
}

export default PageHeaders;
