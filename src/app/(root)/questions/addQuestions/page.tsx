"use client";
import Tooltip from "@/components/molecule/tooltip";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAppDispatch } from "@/hooks/hooks";
import { NotificationType, showNotification } from "@/slice/notification";
import { IoMdAdd } from "react-icons/io";
import * as Yup from "yup";
import { useFormik } from "formik";

export default function AddQuestion() {
  const dispatch = useAppDispatch();

  const validationSchema = Yup.object({
    question: Yup.string().required("Question is Required"),
    option: Yup.array().of(Yup.string().required("Option is Required")).min(1, "At least one option is required"),
  });

  const formik = useFormik({
    initialValues: {
      question: "",
      option: ["", "", ""],
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log("clicked");
      try {
        console.log(values);
        dispatch(
          showNotification({
            message: "Question updated successfully",
            variant: NotificationType.Success,
            autoHide: true,
          })
        );
      } catch (e) {
        console.log(formik.errors.question);
        dispatch(
          showNotification({
            message: "Failed to update question",
            variant: NotificationType.Error,
            autoHide: false,
          })
        );
      }
    },
  });

  const handleSubmit = () => {
    try {
      dispatch(
        showNotification({
          message: "Question updated successfully",
          variant: NotificationType.Success,
          autoHide: true,
        })
      );
    } catch (e) {
      dispatch(
        showNotification({
          message: "Failed to update question",
          variant: NotificationType.Error,
          autoHide: false,
        })
      );
    }
  };
  return (
    <section className="px-8 pt-6">
      <div className="container">
        <div className="grid grid-cols-4">
          <div className="col-span-3">
            <div className="mb-4">
              <label htmlFor="question" className="block mb-2">
                Question
              </label>

              <Input
                className="w-full rounded-[5px] border-[1px] border-gray-300 border-solid "
                name="question"
                type="text"
                onChange={formik.handleChange}
              />
              {formik.touched.question && formik.errors.question ? <p>{formik.errors.question}</p> : ""}
            </div>

            <div className="mb-4">
              <div className="grid grid-cols-3">
                <div className="flex justify-start items-center gap-4">
                  <Input className=" rounded-[5px] border-[1px] border-gray-300 border-solid w-[20px] h-[20px]" name="isMcq" type="radio" />
                  <label htmlFor="question" className="block ">
                    Is MCQ
                  </label>
                </div>
                <div className="flex justify-start items-center gap-4">
                  <Input className=" rounded-[5px] border-[1px] border-gray-300 border-solid w-[20px] h-[20px]" name="isMcq" type="radio" />
                  <label htmlFor="question" className="block ">
                    Have Multiple Answer
                  </label>
                </div>
              </div>
            </div>

            <div className="mb-4">
              <label htmlFor="question" className="block mb-2">
                Actual Answer
              </label>

              <div className=" pt-4 ">
                <Input className="w-full rounded-[5px] border-[1px] border-gray-300 border-solid " name="isMcq" type="text" />
                <Tooltip message="New Answer">
                  <Button className="w-full text-center mt-2 bg-purple-950 hover:bg-purple-700 text-white rounded-[5px]">
                    <IoMdAdd size={32} />
                  </Button>
                </Tooltip>
              </div>
            </div>

            <div className="mb-4">
              <label htmlFor="question" className="block mb-2">
                Options
              </label>

              <div className=" pt-4 ">
                <Input className="w-full rounded-[5px] border-[1px] border-gray-300 border-solid mb-2" name="option[0]" type="text" />
                <Input className="w-full rounded-[5px] border-[1px] border-gray-300 border-solid mb-2" name="option[1]" type="text" />
                <Input className="w-full rounded-[5px] border-[1px] border-gray-300 border-solid mb-2" name="option[2]" type="text" />
                <Tooltip message="New Option">
                  <Button className="w-full text-center  bg-purple-950 hover:bg-purple-700 text-white rounded-[5px]">
                    <IoMdAdd size={32} />
                  </Button>
                </Tooltip>
              </div>
            </div>

            <div className="button__group flex justify-start gap-4">
              <Button className="bg-red-600 text-white hover:bg-red-500" disabled={!formik.dirty}>
                Cancel
              </Button>
              <Button
                type="submit"
                className="bg-green-600 text-white hover:bg-green-500"
                onClick={() => formik.handleSubmit()}
                disabled={!formik.dirty}
              >
                Save
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
