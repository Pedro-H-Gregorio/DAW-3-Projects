"use client";

import Form from "next/form";
import RadioGroup from "../common/RadioGroup";
import RadioGroupItem from "../common/RadioGroupItem";
import Checkbox from "../common/Checkbox";

export default function FormStuff() {
    return (
        <>
            <h2>Form</h2>
            <Form action="#">
                <div className="row gtr-uniform">
                    <div className="col-6 col-12-xsmall">
                        <input type="text" name="demo-name" id="demo-name" value="" placeholder="Name" />
                    </div>
                    <div className="col-6 col-12-xsmall">
                        <input type="email" name="demo-email" id="demo-email" value="" placeholder="Email" />
                    </div>
                    <div className="col-12">
                        <select name="demo-category" id="demo-category">
                            <option value="">- Category -</option>
                            <option value="1">Manufacturing</option>
                            <option value="1">Shipping</option>
                            <option value="1">Administration</option>
                            <option value="1">Human Resources</option>
                        </select>
                    </div>
                    <RadioGroup wrapper={{
                        component: "div",
                        props: { className: "col-4 col-12-small" }
                    }} name="size" defaultValue="low">
                        <RadioGroupItem id="low">Low</RadioGroupItem>
                        <RadioGroupItem id="normal">Normal</RadioGroupItem>
                        <RadioGroupItem id="high">High</RadioGroupItem>
                    </RadioGroup>
                    <div className="col-6 col-12-small">
                        <Checkbox id="copy">Email me a copy</Checkbox>
                    </div>
                    <div className="col-6 col-12-small">
                        <Checkbox id="human" checked={true}>I am a human</Checkbox>
                    </div>
                    <div className="col-12">
                        <textarea name="demo-message" id="demo-message" placeholder="Enter your message"
                            rows={6}></textarea>
                    </div>
                    <div className="col-12">
                        <ul className="actions">
                            <li><input type="submit" value="Send Message" className="primary" /></li>
                            <li><input type="reset" value="Reset" /></li>
                        </ul>
                    </div>
                </div>
            </Form>
        </>
    );
}
