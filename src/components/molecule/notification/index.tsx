"use client";
import { IoClose } from "react-icons/io5";
import { useAppDispatch, useAppSelector } from "@/hooks/hooks";
import { hideNotification } from "@/slice/notification";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export default function Notification() {
  const { message, open, variant, autoHide } = useAppSelector((state) => state.notification);
  const [autoHideDuration, setAutoHideDuration] = useState(4000);

  const dispatch = useAppDispatch();

  useEffect(() => {
    let timer: any;
    if (open && autoHide) {
      timer = setTimeout(() => {
        handleClose();
      }, autoHideDuration);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [open, autoHideDuration]);

  const handleClose = () => {
    dispatch(hideNotification());
  };

  if (!open) {
    return null;
  }

  return (
    <div
      style={{
        position: "fixed",
        top: "20px",
        left: "50%",
        transform: "translateX(-50%)",
        maxWidth: "350px",
        backgroundColor: variant === "success" ? "#4caf50" : variant === "error" ? "#f44336" : "#2196f3",
        color: "#ffffff",
        padding: "10px",
        borderRadius: "4px",
        textAlign: "center",
      }}
      onClick={handleClose}
    >
      <div className="flex items-center justify-between">
        {message}
        <Button className="pr-0" onClick={handleClose}>
          <IoClose />
        </Button>
      </div>
    </div>
  );
}
