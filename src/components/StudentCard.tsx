import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function StudentCard() {
    return (
        <div className="flex flex-col items-center justify-center p-4 border rounded-lg shadow-md">
            <img
                src="https://via.placeholder.com/150"
                alt="Student Avatar"
                className="w-24 h-24 rounded-full mb-4"
            />
            <h2 className="text-xl font-semibold">Kittiphit Mekaroonkamol</h2>
            <p className="text-gray-600">นักศึกษาวิศวะกรรมคอมพิวเตอร์ มอชอ</p>
            <Badge variant="outline" className="mt-2">
                Hobbies: Coding, Gaming
            </Badge>
            <Badge variant="outline" className="mt-2">
                Email : kittphit_m@cmu.ac.th
            </Badge>
            <Badge variant="outline" className="mt-2">
                Social : Instragram k_inkit
            </Badge>
            <p className="text-gray-600">รหัสนักศึกษา 680610655</p>
        </div>
    );
}