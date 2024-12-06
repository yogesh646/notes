import React, { useState } from 'react'
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import NoteAltOutlinedIcon from '@mui/icons-material/NoteAltOutlined';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
export const categories=[
    {name:"Goals",
      icon:<FolderOutlinedIcon
      style={{
        fontSize: "25px", // Make the icon larger
        color: "#BBB", // Use the secondary color
        stroke: "var(--mui-palette-secondary-main)", // Border color
        strokeWidth: 2, // Thicker borders
      }}
      />,
      onClick:'hello'
    },
    {name:"Designs",
      icon:<FolderOutlinedIcon
      style={{
        fontSize: "25px", // Make the icon larger
        color: "#BBB", // Use the secondary color
        stroke: "var(--mui-palette-secondary-main)", // Border color
        strokeWidth: 2, // Thicker borders
      }}
      />,
      onClick:'hello'
    },
    {name:"Personal",
      icon:<FolderOutlinedIcon
      style={{
        fontSize: "25px", // Make the icon larger
        color: "#BBB", // Use the secondary color
        stroke: "var(--mui-palette-secondary-main)", // Border color
        strokeWidth: 2, // Thicker borders
      }}
      />,
      onClick:'hello'
    },
    {name:"Health",
      icon:<FolderOutlinedIcon
      style={{
        fontSize: "25px", // Make the icon larger
        color: "#BBB", // Use the secondary color
        stroke: "var(--mui-palette-secondary-main)", // Border color
        strokeWidth: 2, // Thicker borders
      }}
      />,
      onClick:'hello'
    }
  ]
  export const checkin=[
    {name:"Scratchpad",
      icon:<BorderColorOutlinedIcon
      style={{
        fontSize: "25px", // Make the icon larger
        color: "#BBB", // Use the secondary color
        stroke: "var(--mui-palette-secondary-main)", // Border color
        strokeWidth: 2, // Thicker borders
      }}
      />,
      onClick:'hello'
    },
    {name:"Notes",
      icon:<NoteAltOutlinedIcon
      style={{
        fontSize: "25px", // Make the icon larger
        color: "#BBB", // Use the secondary color
        stroke: "var(--mui-palette-secondary-main)", // Border color
        strokeWidth: 2, // Thicker borders
      }}
      />,
      onClick:'hello'
    },
    {name:"Favourites",
      icon:<StarBorderOutlinedIcon
      style={{
        fontSize: "25px", // Make the icon larger
        color: "#BBB", // Use the secondary color
        stroke: "var(--mui-palette-secondary-main)", // Border color
        strokeWidth: 2, // Thicker borders
      }}
      />,
      onClick:'hello'
    },
    {name:"Trash",
      icon:<DeleteOutlineOutlinedIcon
      style={{
        fontSize: "30px", // Make the icon larger
        color: "#BBB", // Use the secondary color
        stroke: "var(--mui-palette-secondary-main)", // Border color
        strokeWidth: 2, // Thicker borders
      }}
      />,
      onClick:'hello'
    }
  ]