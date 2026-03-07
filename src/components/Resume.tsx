"use client";

export default function Resume() {
	const downloadPDF = () => {
		// Use browser's native print dialog for PDF generation with clickable links
		window.print();
	};

	return (
		<>
			<style>
				{`
          @media print {
            body {
              margin: 0;
              padding: 0;
            }
            
            @page {
              size: A4;
              margin: 0;
            }
            
            .no-print {
              display: none !important;
            }1
            
            .print-container {
              width: 210mm;
              min-height: 297mm;
              padding: 8mm 20mm 10mm 20mm;
              margin: 0;
              background: white;
              box-sizing: border-box;
            }
            
            a {
              color: #2563eb !important;
              text-decoration: underline !important;
            }
            
            a[href]::after {
              content: none !important;
            }
          }
          
          @media screen {
            .print-container {
              background: white;
            }
          }
        `}
			</style>
			<div className="min-h-screen bg-gray-50 py-8 no-print">
				<div className="max-w-4xl mx-auto mb-4 flex justify-center">
					<button
						type="button"
						onClick={downloadPDF}
						className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
					>
						Download as PDF
					</button>
				</div>
			</div>
			<div className="max-w-4xl mx-auto bg-white border-black border-1">
				{/* A4 Paper Container - 210mm width, auto height */}
				<div
					className="print-container w-[210mm] mx-auto items-start p-8 overflow-visible"
					style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}
				>
					{/* Header */}
					<header className="text-center mb-3">
						<h1 className="text-3xl font-bold text-gray-900 mb-1">
							Kea Kimthean
						</h1>
						<div className="flex justify-center items-center space-x-4 text-sm text-gray-600">
							<span>+855 81 632527</span>
							<span>|</span>
							<span>kimthean75@gmail.com</span>
							<span>|</span>
							<a
								href="https://www.linkedin.com/in/kea-kimthean/"
								target="_blank"
								rel="noopener noreferrer"
								className="text-blue-600 hover:underline"
							>
								LinkedIn
							</a>
							<span>|</span>
							<a
								href="https://github.com/Kimthean"
								target="_blank"
								rel="noopener noreferrer"
								className="text-blue-600 hover:underline"
							>
								Github
							</a>
							<span>|</span>
							<a
								href="https://thean.dev"
								target="_blank"
								rel="noopener noreferrer"
								className="text-blue-600 hover:underline"
							>
								thean.dev
							</a>
						</div>
					</header>

					{/* Summary */}
					<section className="mb-2">
						<h2 className="text-lg font-semibold text-gray-900 pb-2 border-b-2 border-gray-300 mb-2">
							Summary
						</h2>
						<p className="text-sm text-gray-700 leading-relaxed">
							Full Stack Developer with experience building scalable web
							applications using modern JavaScript frameworks. Developed
							production systems including payment gateways, blockchain
							platforms, and distributed chatbot systems.
						</p>
					</section>

					{/* Work Experience */}
					<section className="mb-2">
						<h2 className="text-lg font-semibold text-gray-900 pb-2 border-b-2 border-gray-300 mb-2">
							Work Experience
						</h2>

						{/* ICE Electronics - Mid-Level Fullstack Developer */}
						<div className="mb-1.5">
							<div className="flex justify-between items-start mb-1">
								<div>
									<h3 className="font-semibold text-gray-900">
										Mid-Level Fullstack Developer
									</h3>
									<p className="text-sm text-gray-600">
										ICE Electronics Co., Ltd
									</p>
								</div>
								<span className="text-sm text-gray-600">
									Sep 2025 – Present
								</span>
							</div>
							<ul className="text-sm text-gray-700 space-y-0.5 ml-4">
								<li>
									• Rebuilt ICE KH mobile app using React Native with real-time
									product catalog and order management
								</li>
								<li>
									• Building enterprise-grade applications using microservices
									architecture with NestJS and microfrontend patterns
								</li>
								<li>
									• Implementing Module Federation for scalable frontend
									architecture and complex state management with Kysely
								</li>
								<li>
									• Developing ERP solutions with focus on modularity,
									performance, and maintainability
								</li>
							</ul>
						</div>

						{/* Freelance - Full Stack Developer */}
						<div className="mb-1.5">
							<div className="flex justify-between items-start mb-1">
								<div>
									<h3 className="font-semibold text-gray-900">
										Full Stack Developer
									</h3>
									<p className="text-sm text-gray-600">Freelance — Remote</p>
								</div>
								<span className="text-sm text-gray-600">
									May 2025 – Jan 2026
								</span>
							</div>
							<ul className="text-sm text-gray-700 space-y-0.5 ml-4">
								<li>
									• Building a modular CMS/AMS/DMS system for a government
									agency using a microservice architecture
								</li>
								<li>
									• Developed multiple backend microservices using NestJS with
									centralized auth, logging, and RBAC
								</li>
								<li>
									• Built a performant frontend with TanStack Router and React,
									enabling document workflows and dynamic views
								</li>
								<li>
									• Integrated secure document handling, versioning, role-based
									permissions, and approval flows
								</li>
								<li>
									• Orchestrated service communication REST APIs for scalable
									deployment
								</li>
							</ul>
						</div>

						{/* Dreamslab - Full Stack Developer */}
						<div className="mb-1.5">
							<div className="flex justify-between items-start mb-1">
								<div>
									<h3 className="font-semibold text-gray-900">
										Full Stack Developer
									</h3>
									<p className="text-sm text-gray-600">Dreamslab — Cambodia</p>
								</div>
								<span className="text-sm text-gray-600">
									Mar 2025 – Jul 2025
								</span>
							</div>
							<ul className="text-sm text-gray-700 space-y-0.5 ml-4">
								<li>
									• Developed DreamsPay, a secure Bakong payment gateway with
									KHQR code generation, enabling real-time transactions
								</li>
								<li>
									• Engineered Ajium, a blockchain-based loyalty platform on
									Telegram mini app using Next.js and Hono
								</li>
								<li>
									• Integrated NestJS, React Router, and SSE for real-time data
									delivery and optimized user flows
								</li>
							</ul>
						</div>

						{/* Dreamslab - Junior Fullstack Developer */}
						<div className="mb-1.5">
							<div className="flex justify-between items-start mb-1">
								<div>
									<h3 className="font-semibold text-gray-900">
										Junior Fullstack Developer
									</h3>
									<p className="text-sm text-gray-600">Dreamslab — Cambodia</p>
								</div>
								<span className="text-sm text-gray-600">
									Aug 2023 – Mar 2025
								</span>
							</div>
							<ul className="text-sm text-gray-700 space-y-0.5 ml-4">
								<li>
									• Built modular LangChain RAG-based chatbot for customer
									support with NestJS backend and Next.js frontend
								</li>
								<li>
									• Developed reusable chatbot agent library supporting multiple
									JS frameworks with WebSocket and SolidJS components
								</li>
							</ul>
						</div>
					</section>

					{/* Technical Skills */}
					<section className="mb-2">
						<h2 className="text-lg font-semibold text-gray-900 pb-2 border-b-2 border-gray-300 mb-2">
							Technical Skills
						</h2>
						<div className="text-sm text-gray-700 space-y-0.5">
							<div>
								<strong>Frontend Development:</strong> React, React Native
								(Expo), AstroJS, Next.js, TailwindCSS, HTML, CSS, React Router
							</div>
							<div>
								<strong>Backend & API Development:</strong> NestJS, Hono,
								JavaScript, TypeScript, Golang, MERN, RESTful APIs, Performance
								Optimization
							</div>
							<div>
								<strong>Database & Tools:</strong> PostgreSQL, Prisma, Redis,
								SQL, Docker, Turborepo, GitHub Actions
							</div>
						</div>
					</section>

					{/* Education */}
					<section className="mb-2">
						<h2 className="text-lg font-semibold text-gray-900 pb-2 border-b-2 border-gray-300 mb-2">
							Education
						</h2>
						<div className="flex justify-between items-start">
							<div>
								<h3 className="font-semibold text-gray-900">
									Bachelor of Science, Information Technology
								</h3>
								<p className="text-sm text-gray-600">
									University of Cambodia, Phnom Penh, Cambodia
								</p>
								<p className="text-sm text-gray-700">
									IELTS 7.0 • 50% Scholarship
								</p>
							</div>
							<span className="text-sm text-gray-600">Jun 2022- 2026</span>
						</div>
					</section>
				</div>
			</div>
		</>
	);
}
