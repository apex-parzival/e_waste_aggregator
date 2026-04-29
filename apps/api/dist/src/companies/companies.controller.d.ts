import { CompaniesService } from './companies.service';
import { CompanyStatus, CompanyType, DocumentType } from '@prisma/client';
export declare class CompaniesController {
    private companiesService;
    constructor(companiesService: CompaniesService);
    create(req: any, body: any): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        type: import("@prisma/client").$Enums.CompanyType;
        status: import("@prisma/client").$Enums.CompanyStatus;
        gstNumber: string | null;
        panNumber: string | null;
        address: string | null;
        city: string | null;
        state: string | null;
        pincode: string | null;
        rating: number | null;
        ratingCount: number;
    }>;
    findAll(type?: CompanyType, status?: CompanyStatus): Promise<({
        kycDocuments: {
            id: string;
            companyId: string;
            type: import("@prisma/client").$Enums.DocumentType;
            s3Key: string;
            s3Bucket: string;
            fileName: string;
            mimeType: string | null;
            uploadedAt: Date;
        }[];
        users: {
            id: string;
            email: string;
            name: string;
            role: import("@prisma/client").$Enums.UserRole;
        }[];
    } & {
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        type: import("@prisma/client").$Enums.CompanyType;
        status: import("@prisma/client").$Enums.CompanyStatus;
        gstNumber: string | null;
        panNumber: string | null;
        address: string | null;
        city: string | null;
        state: string | null;
        pincode: string | null;
        rating: number | null;
        ratingCount: number;
    })[]>;
    findOne(id: string): Promise<{
        kycDocuments: {
            signedUrl: string;
            id: string;
            companyId: string;
            type: import("@prisma/client").$Enums.DocumentType;
            s3Key: string;
            s3Bucket: string;
            fileName: string;
            mimeType: string | null;
            uploadedAt: Date;
        }[];
        users: {
            id: string;
            email: string;
            name: string;
            role: import("@prisma/client").$Enums.UserRole;
        }[];
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        type: import("@prisma/client").$Enums.CompanyType;
        status: import("@prisma/client").$Enums.CompanyStatus;
        gstNumber: string | null;
        panNumber: string | null;
        address: string | null;
        city: string | null;
        state: string | null;
        pincode: string | null;
        rating: number | null;
        ratingCount: number;
    }>;
    update(id: string, body: any): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        type: import("@prisma/client").$Enums.CompanyType;
        status: import("@prisma/client").$Enums.CompanyStatus;
        gstNumber: string | null;
        panNumber: string | null;
        address: string | null;
        city: string | null;
        state: string | null;
        pincode: string | null;
        rating: number | null;
        ratingCount: number;
    }>;
    updateStatus(id: string, status: CompanyStatus): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        type: import("@prisma/client").$Enums.CompanyType;
        status: import("@prisma/client").$Enums.CompanyStatus;
        gstNumber: string | null;
        panNumber: string | null;
        address: string | null;
        city: string | null;
        state: string | null;
        pincode: string | null;
        rating: number | null;
        ratingCount: number;
    }>;
    uploadDocument(id: string, file: Express.Multer.File, type: DocumentType): Promise<{
        id: string;
        companyId: string;
        type: import("@prisma/client").$Enums.DocumentType;
        s3Key: string;
        s3Bucket: string;
        fileName: string;
        mimeType: string | null;
        uploadedAt: Date;
    }>;
    updateRating(id: string, rating: number): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        type: import("@prisma/client").$Enums.CompanyType;
        status: import("@prisma/client").$Enums.CompanyStatus;
        gstNumber: string | null;
        panNumber: string | null;
        address: string | null;
        city: string | null;
        state: string | null;
        pincode: string | null;
        rating: number | null;
        ratingCount: number;
    }>;
}
