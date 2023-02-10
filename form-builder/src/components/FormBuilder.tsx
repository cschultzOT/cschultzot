import { useEffect, useState } from "react";
import Field from './partials/Field'

function FormBuilder() {

    const [fields, setFields] = useState([
        {
            label: "",
            name: "elqCampaignId",
            options: "",
            type: "hidden",
            value:"",
        },
        {
            label: "",
            name: "elqFormName",
            options: "",
            type: "hidden",
            value:"",
        },
        {
            label: "",
            name: "elqSiteId",
            options: "",
            type: "hidden",
            value:"459",
        },
        {
            label: "",
            name: "Annual_Revenue",
            options: "",
            type: "hidden",
            value:"49",
        },
        {
            label: "",
            name: "DataRequest",
            options: "",
            type: "hidden",
            value:"",
        },
        {
            label: "",
            name: "db_annual_sales",
            options: "",
            type: "hidden",
            value:"",
        },
        {
            label: "",
            name: "db_marketing_alias",
            options: "",
            type: "hidden",
            value:"",
        },
        {
            label: "",
            name: "LeadSource-Origin",
            options: "",
            type: "hidden",
            value:"Marketing - Organic Inbound",
        },
        {
            label: "",
            name: "Number_of_Employees",
            options: "",
            type: "hidden",
            value:"",
        },
        {
            label: "",
            name: "PageLang",
            options: "",
            type: "hidden",
            value:"",
        },
        {
            label: "",
            name: "PageURL",
            options: "",
            type: "hidden",
            value:"",
        },
        {
            label: "",
            name: "Preferencerequest-FORMS",
            options: "",
            type: "hidden",
            value:"",
        },
        {
            label: "",
            name: "Referrer",
            options: "",
            type: "hidden",
            value:"",
        },
        {
            label: "",
            name: "Region",
            options: "",
            type: "hidden",
            value:"",
        },
        {
            label: "",
            name: "tURL",
            options: "",
            type: "hidden",
            value:"",
        },
        {
            id: "elq-inquiry",
            label: "Inquiry type",
            name: "dropdownMenu",
            options: [
                ["", "-- Please Select --"],
                ["General Inquiries","General inquiries"],
                ["Customer Support","Customer Support"],
                ["Learning Services","Learning Services"],
                ["Partners","Global Partner Program"],
                ["Professional Services","Professional Services"],
                ["Sales","Sales"],
            ],
            required: true,
            type:"select"
        },
        {
            id: "elq-email",
            label: "Email address",
            name: "emailAddress",
            options: "",
            required: true,
            type: "text"
        },
        {
            id: "elq-firstname",
            label: "First Name",
            name: "firstName",
            options: "",
            required: true,
            type: "text"
        },
        {
            id: "elq-lastname",
            label: "Last Name",
            name: "lastName",
            options: "",
            required: true,
            type: "text"
        },
        {
            id: "elq-title",
            label: "Title",
            name: "title",
            options: "",
            required: true,
            type: "text"
        },
        {
            id: "elq-company",
            label: "Company",
            name: "company",
            options: "",
            required: true,
            type: "text"
        },
        {
            id: "elq-country",
            label: "Country",
            name: "country",
            options: [],
            required: true,
            type: "country"
        },
        {
            id: "elq-state",
            label: "State or province",
            name: "stateProv",
            options: [],
            required: true,
            type: "stateProv"
        },
        {
            id: "elq-busphone",
            label: "Business Phone",
            name: "busPhone",
            options: [],
            required: true,
            type: "text"
        },
        {
            id: "elq-industry",
            label: "Industry",
            name: "sFIndustry1",
            options: [],
            required: true,
            type: "text"
        },
        {
            id: "elq-reason",
            label: "How can we help? (optional)",
            name: "ReasonforContact",
            options: [],
            required: true,
            rows: 4,
            type: "textarea"
        },
        {
            id: "contact-submit",
            label: "",
            name: "",
            options: [],
            required: true,
            type: "submit",
            value: "Contact us"
        },
    ]);

    function handleOnChange(e) {
        console.log(e.target)
    }

    //  console.log(JSON.stringify(Object.fromEntries(data)))
    return (
        <>
            {/* Ability to add inputs */}
            {fields.map((field, key) => (
                <Field key={key} field={field} handleOnChange={handleOnChange} />
            ))}
            {/* When input active you can change all aspects for the input */}

            {/* When Inactive it shows what the form will look like */}

            {/* Ability to add Modal functionality */}
        </>
    )
}

export default FormBuilder