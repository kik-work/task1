import React, { useState } from "react";
import "./App.css";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { MoreHorizontal } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

interface Applicant {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
}

interface DataItem {
  id: string;
  job_application_id: string;
  scheduled_interview_time: string;
  mode: string;
  location: string | null;
  meeting_url: string | null;
  status: string;
  notes: string;
  applicant: Applicant;
  created_at: string;
}

function App() {
  // expandedId as string or null because id in data is string
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const datas: DataItem[] = [
    {
      id: "1",
      job_application_id: "app-001",
      scheduled_interview_time: "2025-08-09 12:00:00",
      mode: "online",
      location: null,
      meeting_url: "Google Meet",
      status: "shortlisted",
      notes: "Preferred in the morning.",
      applicant: {
        first_name: "Jalal",
        last_name: "Miah",
        email: "jalal9@example.com",
        phone: "01712349888",
      },
      created_at: "2025-08-05T07:54:53.000000Z",
    },
    {
      id: "2",
      job_application_id: "app-002",
      scheduled_interview_time: "2025-08-10 15:00:00",
      mode: "offline",
      location: "Office HQ",
      meeting_url: null,
      status: "pending",
      notes: "Needs projector setup.",
      applicant: {
        first_name: "Salma",
        last_name: "Khatun",
        email: "salma@example.com",
        phone: "01712340000",
      },
      created_at: "2025-08-06T09:30:00.000000Z",
    },
  ];

  const toggleExpand = (id: string) => {
    setExpandedId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className="overflow-x-auto p-4">
      <Table className="min-w-full text-xs border border-gray-200 rounded-md">
        <TableHeader>
          <TableRow className="bg-gray-100">
            <TableHead className="text-left px-2 py-1">ID</TableHead>
            <TableHead className="text-left px-2 py-1">Job App ID</TableHead>
            <TableHead className="text-center px-2 py-1">
              Interview Time
            </TableHead>
            <TableHead className="text-left px-2 py-1">Mode</TableHead>
            <TableHead className="text-left px-2 py-1">Location</TableHead>
            <TableHead className="text-left px-2 py-1">Meeting URL</TableHead>
            <TableHead className="text-left px-2 py-1">Status</TableHead>
            <TableHead className="text-center px-2 py-1">Notes</TableHead>
            <TableHead className="text-left px-2 py-1">First Name</TableHead>
            <TableHead className="text-left px-2 py-1">Last Name</TableHead>
            <TableHead className="text-center px-2 py-1">Email</TableHead>
            <TableHead className="text-left px-2 py-1">Phone</TableHead>
            <TableHead className="text-center px-2 py-1">Created At</TableHead>
            <TableHead className="text-center px-2 py-1">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {datas.map((data) => (
            <React.Fragment key={data.id}>
              <TableRow className="hover:bg-gray-50">
                <TableCell className="px-2 py-1">{data.id}</TableCell>
                <TableCell className="px-2 py-1">
                  {data.job_application_id}
                </TableCell>
                <TableCell className="px-2 py-1">
                  {data.scheduled_interview_time}
                </TableCell>
                <TableCell className="px-2 py-1 capitalize">
                  {data.mode}
                </TableCell>
                <TableCell className="px-2 py-1">
                  {data.location ?? "N/A"}
                </TableCell>
                <TableCell className="px-2 py-1">
                  {data.meeting_url ?? "N/A"}
                </TableCell>
                <TableCell className="px-2 py-1 capitalize">
                  {data.status}
                </TableCell>
                <TableCell className="px-2 py-1">{data.notes}</TableCell>
                <TableCell className="px-2 py-1">
                  {data.applicant.first_name}
                </TableCell>
                <TableCell className="px-2 py-1">
                  {data.applicant.last_name}
                </TableCell>
                <TableCell className="px-2 py-1">
                  {data.applicant.email}
                </TableCell>
                <TableCell className="px-2 py-1">
                  {data.applicant.phone}
                </TableCell>
                <TableCell className="px-2 py-1">{data.created_at}</TableCell>
                <TableCell className="px-2 py-1 text-center">
                  <button
                    className="hover:bg-gray-200 p-1 rounded-md"
                    onClick={() => toggleExpand(data.id)}
                    aria-label="Toggle details"
                  >
                    <MoreHorizontal className="h-4 w-4" />
                  </button>
                </TableCell>
              </TableRow>

              {expandedId === data.id && (
                <>
                  {/* Background overlay with blur */}
                  <div
                    className="fixed inset-0 bg-slate-200 bg-opacity-60 backdrop-blur-[1px] z-40"
                    onClick={() => setExpandedId(null)} // close modal on clicking overlay
                  />

                  {/* Modal box */}
                  <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
                    <div className="bg-slate-100 rounded-xl hover:border hover:border-blue-700 shadow-lg max-w-sm w-full p-6 relative">
                      {/* Close button */}
                      <button
                        onClick={() => setExpandedId(null)}
                        className="absolute top-3 right-3 text-gray-500 hover:text-red-600"
                        aria-label="Close modal"
                      >
                        ✕
                      </button>

                      <Card className="w-full max-w-md mx-auto">
                        <CardHeader>
                          <CardTitle className="text-lg">
                            Applicant Details
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="grid grid-cols-2 gap-y-2 text-sm text-start">
                          <div className="font-medium text-gray-700  text-end pr-3">
                            First Name:
                          </div>
                          <div className="text-gray-900">
                            {data.applicant.first_name}
                          </div>

                          <div className="font-medium text-gray-700  text-end pr-3">
                            Last Name:
                          </div>
                          <div className="text-gray-900">
                            {data.applicant.last_name}
                          </div>

                          <div className="font-medium text-gray-700  text-end pr-3">
                            Email:
                          </div>
                          <div className="text-gray-900">
                            {data.applicant.email}
                          </div>

                          <div className="font-medium text-gray-700  text-end pr-3">
                            Phone:
                          </div>
                          <div className="text-gray-900">
                            {data.applicant.phone}
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </>
              )}
            </React.Fragment>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default App;
