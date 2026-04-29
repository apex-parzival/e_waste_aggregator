import { RequirementsService } from './requirements.service';
export declare class RequirementsController {
    private svc;
    constructor(svc: RequirementsService);
    create(body: any, file: Express.Multer.File, req: any): Promise<{
        client: {
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
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: import("@prisma/client").$Enums.RequirementStatus;
        title: string;
        description: string | null;
        rawS3Key: string | null;
        processedS3Key: string | null;
        targetPrice: number | null;
        totalWeight: number | null;
        category: string | null;
        clientId: string;
    }>;
    findAll(clientId?: string): Promise<({
        auditInvitations: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            status: import("@prisma/client").$Enums.AuditStatus;
            requirementId: string;
            vendorId: string;
            siteAddress: string | null;
            spocName: string | null;
            spocPhone: string | null;
            scheduledAt: Date | null;
        }[];
        auction: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            status: import("@prisma/client").$Enums.AuctionStatus;
            title: string;
            description: string | null;
            targetPrice: number | null;
            category: string;
            clientId: string;
            requirementId: string | null;
            basePrice: number;
            tickSize: number;
            maxTicks: number;
            extensionMinutes: number;
            sealedPhaseStart: Date | null;
            sealedPhaseEnd: Date | null;
            openPhaseStart: Date | null;
            openPhaseEnd: Date | null;
            extensionCount: number;
            quoteApproved: boolean | null;
            quoteRemarks: string | null;
            winnerId: string | null;
        } | null;
        client: {
            users: {
                id: string;
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
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: import("@prisma/client").$Enums.RequirementStatus;
        title: string;
        description: string | null;
        rawS3Key: string | null;
        processedS3Key: string | null;
        targetPrice: number | null;
        totalWeight: number | null;
        category: string | null;
        clientId: string;
    })[]>;
    findOne(id: string): Promise<{
        auditInvitations: ({
            vendor: {
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
            };
            report: {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                invitationId: string;
                productMatch: boolean | null;
                remarks: string | null;
                completedAt: Date | null;
                vendorUserId: string | null;
            } | null;
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            status: import("@prisma/client").$Enums.AuditStatus;
            requirementId: string;
            vendorId: string;
            siteAddress: string | null;
            spocName: string | null;
            spocPhone: string | null;
            scheduledAt: Date | null;
        })[];
        auction: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            status: import("@prisma/client").$Enums.AuctionStatus;
            title: string;
            description: string | null;
            targetPrice: number | null;
            category: string;
            clientId: string;
            requirementId: string | null;
            basePrice: number;
            tickSize: number;
            maxTicks: number;
            extensionMinutes: number;
            sealedPhaseStart: Date | null;
            sealedPhaseEnd: Date | null;
            openPhaseStart: Date | null;
            openPhaseEnd: Date | null;
            extensionCount: number;
            quoteApproved: boolean | null;
            quoteRemarks: string | null;
            winnerId: string | null;
        } | null;
        client: {
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
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: import("@prisma/client").$Enums.RequirementStatus;
        title: string;
        description: string | null;
        rawS3Key: string | null;
        processedS3Key: string | null;
        targetPrice: number | null;
        totalWeight: number | null;
        category: string | null;
        clientId: string;
    }>;
    uploadProcessed(id: string, file: Express.Multer.File): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: import("@prisma/client").$Enums.RequirementStatus;
        title: string;
        description: string | null;
        rawS3Key: string | null;
        processedS3Key: string | null;
        targetPrice: number | null;
        totalWeight: number | null;
        category: string | null;
        clientId: string;
    }>;
    clientApprove(id: string, body: any): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: import("@prisma/client").$Enums.RequirementStatus;
        title: string;
        description: string | null;
        rawS3Key: string | null;
        processedS3Key: string | null;
        targetPrice: number | null;
        totalWeight: number | null;
        category: string | null;
        clientId: string;
    }>;
    getSignedUrl(id: string, field: 'raw' | 'processed'): Promise<{
        url: string;
    }>;
}
