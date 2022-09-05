(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"root-container\">\r\n  <h1 class=\"h1 star-wars-font\">Star Wars planets</h1>\r\n\r\n  <div class=\"app-container mat-elevation-z8\">\r\n    <div class=\"app-loading-shade\"\r\n        *ngIf=\"isLoadingResults || isRateLimitReached\">\r\n      <mat-spinner *ngIf=\"isLoadingResults\"></mat-spinner>\r\n      <div class=\"app-rate-limit-reached\" *ngIf=\"isRateLimitReached\">\r\n        No data.\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"app-table-container\">\r\n      <mat-table\r\n        [dataSource]=\"data\"\r\n        class=\"app-table\"\r\n        matSort\r\n        matSortActive=\"created\"\r\n        matSortDisableClear\r\n        matSortDirection=\"asc\">\r\n\r\n        <ng-container matColumnDef=\"name\">\r\n          <mat-header-cell *matHeaderCellDef>Name</mat-header-cell>\r\n          <mat-cell  *matCellDef=\"let row\">{{row.name}}</mat-cell>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"terrain\">\r\n          <mat-header-cell  *matHeaderCellDef>Terrain</mat-header-cell>\r\n          <mat-cell  *matCellDef=\"let row\">{{row.terrain}}</mat-cell>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"population\">\r\n          <mat-header-cell  *matHeaderCellDef>Population</mat-header-cell>\r\n          <mat-cell  *matCellDef=\"let row\">{{row.population | population}}</mat-cell>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"residents_amount\">\r\n          <mat-header-cell  *matHeaderCellDef>Residents amount</mat-header-cell>\r\n          <mat-cell  *matCellDef=\"let row\">{{row.residents.length}}</mat-cell>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"films_amount\">\r\n          <mat-header-cell  *matHeaderCellDef>Films amount</mat-header-cell>\r\n          <mat-cell  *matCellDef=\"let row\">{{row.films.length}}</mat-cell>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"expandedDetail\">\r\n          <mat-cell *matCellDef=\"let row\" [attr.colspan]=\"displayedColumns.length\">\r\n            <p *ngIf=\"row.item.films && row.item.films.length\">\r\n              <b>Films: </b> \r\n              <ng-container *ngFor=\"let film of row.item.films; last as isLast; index as i\">\r\n                <ng-container *ngIf=\"mockDetails[film]; else defaultFilmName\">\r\n                  <a [href]=\"mockDetails[film].link\" class=\"link\" target=\"_blank\">{{mockDetails[film].title}}</a>\r\n                </ng-container>\r\n                <ng-template #defaultFilmName>\r\n                  <a [href]=\"film\" class=\"link\" target=\"_blank\">Film {{i+1}}</a>\r\n                </ng-template>\r\n                <ng-container *ngIf=\"!isLast\">,&nbsp; </ng-container>\r\n              </ng-container>\r\n            </p>\r\n\r\n            <p *ngIf=\"row.item.residents && row.item.residents.length\">\r\n              <b>Residents: </b>\r\n              <ng-container *ngFor=\"let resident of row.item.residents; last as isLast; index as i\">\r\n                <ng-container *ngIf=\"mockDetails[resident]; else defaultResidentName\">\r\n                  <a [href]=\"mockDetails[resident].link || resident\" class=\"link\" target=\"_blank\">{{mockDetails[resident].name}}</a>\r\n                </ng-container>\r\n                <ng-template #defaultResidentName>\r\n                  <a [href]=\"resident\" class=\"link\" target=\"_blank\">Resident {{i+1}}</a>\r\n                </ng-template>\r\n                <ng-container *ngIf=\"!isLast\">,&nbsp; </ng-container>\r\n              </ng-container>\r\n            </p>\r\n          </mat-cell>\r\n        </ng-container>\r\n\r\n        <mat-header-row  \r\n          *matHeaderRowDef=\"displayedColumns; sticky: true;\"\r\n          class=\"header-row\"></mat-header-row>\r\n\r\n        <mat-row\r\n          *matRowDef=\"let row; columns: displayedColumns;\"\r\n          matRipple\r\n          class=\"element-row\"\r\n          [class.no-details]=\"row.noDetails\"\r\n          [class.expanded]=\"expandedElement == row\"\r\n          (click)=\"onRowClick($event, row)\"></mat-row>\r\n\r\n        <mat-row\r\n          *matRowDef=\"let row; columns: ['expandedDetail']; when: isExpansionDetailRow\"\r\n          class=\"element-detail-row\"\r\n          [@detailExpand]=\"row.item == expandedElement ? 'expanded' : 'collapsed'\"\r\n          style=\"overflow: hidden\"></mat-row>\r\n      </mat-table>\r\n    </div>\r\n\r\n    <mat-paginator class=\"mat-paginator\" [length]=\"resultsLength\" [pageSizeOptions]=\"pageSizeOptions\" showFirstLastButtons></mat-paginator>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".root-container {\n  padding: 0 10px 10px;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  background-image: var(--root-background-image);\n  background-size: cover;\n  background-position: 100% 0;\n  color: var(--text-color);\n  -webkit-animation: background-offset 10s ease-in-out infinite alternate;\n          animation: background-offset 10s ease-in-out infinite alternate;\n}\n\n.h1 {\n  margin: 15px 0;\n  font-size: 36px;\n  text-align: center;\n}\n\n.link {\n  color: var(--link-color);\n}\n\n.search-fieldset {\n  max-width: 50%;\n  display: flex;\n  align-items: baseline;\n}\n\n.search-button,\n.search-reset-button {\n  margin-left: 8px;\n}\n\n.search-field {\n  flex: 1 0 100px;\n}\n\n.filter {\n  display: block;\n}\n\n.h1 {\n  text-align: center;\n}\n\n.app-container {\n  position: relative;\n  flex: 1 0 200px;\n  display: flex;\n  flex-direction: column;\n}\n\n.app-table {\n  min-width: 460px;\n}\n\n.mat-paginator,\n.app-table {\n  background-color: var(--app-bg-color);\n}\n\n.app-table-container {\n  position: relative;\n  flex: 1 0 200px;\n  overflow: auto;\n}\n\n.app-table-container mat-cell {\n  line-height: 1.5;\n  padding-top: 5px;\n  padding-bottom: 5px;\n}\n\ntable {\n  width: 100%;\n}\n\n.app-loading-shade {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 56px;\n  right: 0;\n  background: rgba(0, 0, 0, 0.15);\n  z-index: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.app-rate-limit-reached {\n  color: #d50000;\n  max-width: 360px;\n  text-align: center;\n}\n\n.element-row:not(.no-details) {\n  position: relative;\n  cursor: pointer;\n}\n\n.element-row:not(.no-details):hover {\n  background-color: var(--hover-row-bg-color);\n}\n\n.element-row:not(.no-details).expanded {\n  border-bottom-color: transparent;\n  background-color: var(--hover-row-bg-color);\n}\n\n.element-detail-row {\n  background-color: var(--detail-bg-color);\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n  background-clip: padding-box;\n}\n\n.element-detail-row p:not(:first-child) {\n  margin-top: 10px;\n}\n\n.element-detail-row mat-cell {\n  padding-top: 10px;\n  padding-bottom: 10px;\n  flex-direction: column;\n  align-items: flex-start;\n}\n\n.mat-paginator,\n.mat-header-cell,\n.mat-cell,\n.mat-footer-cell {\n  color: inherit;\n}\n\n.mat-column-number,\n.mat-column-state {\n  max-width: 100px;\n}\n\n.mat-column-created {\n  max-width: 130px;\n}\n\n.mat-header-row {\n  box-shadow: 0 -4px 5px #000;\n  background-color: #191c25;\n}\n\nmat-row {\n  min-height: 30px;\n}\n\n@media (max-width: 500px) {\n  .h1 {\n    font-size: 32px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXE15IGFwcHNcXGFuZ3VsYXItc3dhcGktdGFibGVcXGNsaWVudC9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsOENBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0Esd0JBQUE7RUFDQSx1RUFBQTtVQUFBLCtEQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDRUY7O0FEQUE7RUFDRSx3QkFBQTtBQ0dGOztBRERBO0VBQ0UsY0FBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtBQ0lGOztBREZBOztFQUVFLGdCQUFBO0FDS0Y7O0FESEE7RUFDRSxlQUFBO0FDTUY7O0FESkE7RUFDRSxjQUFBO0FDT0Y7O0FETEE7RUFDRSxrQkFBQTtBQ1FGOztBRE5BO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FDU0Y7O0FEUEE7RUFDRSxnQkFBQTtBQ1VGOztBRFBBOztFQUVFLHFDQUFBO0FDVUY7O0FEUEE7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDVUY7O0FEUkU7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNVSjs7QURQQTtFQUNFLFdBQUE7QUNVRjs7QURSQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0EsUUFBQTtFQUNBLCtCQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDV0Y7O0FEVEE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ1lGOztBRFRBO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0FDWUY7O0FEVkU7RUFDRSwyQ0FBQTtBQ1lKOztBRFZFO0VBQ0UsZ0NBQUE7RUFDQSwyQ0FBQTtBQ1lKOztBRFRBO0VBQ0Usd0NBQUE7RUFDQSw0Q0FBQTtFQUNBLDRCQUFBO0FDWUY7O0FEVkU7RUFDRSxnQkFBQTtBQ1lKOztBRFRFO0VBQ0UsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUNXSjs7QURQQTs7OztFQUlFLGNBQUE7QUNVRjs7QURSQTs7RUFFRSxnQkFBQTtBQ1dGOztBRFRBO0VBQ0UsZ0JBQUE7QUNZRjs7QURWQTtFQUNFLDJCQUFBO0VBQ0EseUJBQUE7QUNhRjs7QURYQTtFQUNFLGdCQUFBO0FDY0Y7O0FEVkE7RUFDRTtJQUNFLGVBQUE7RUNhRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJvb3QtY29udGFpbmVyIHtcclxuICBwYWRkaW5nOiAwIDEwcHggMTBweDtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdmFyKC0tcm9vdC1iYWNrZ3JvdW5kLWltYWdlKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDEwMCUgMDtcclxuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XHJcbiAgYW5pbWF0aW9uOiBiYWNrZ3JvdW5kLW9mZnNldCAxMHMgZWFzZS1pbi1vdXQgaW5maW5pdGUgYWx0ZXJuYXRlO1xyXG59XHJcbi5oMSB7XHJcbiAgbWFyZ2luOiAxNXB4IDA7XHJcbiAgZm9udC1zaXplOiAzNnB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4ubGluayB7XHJcbiAgY29sb3I6IHZhcigtLWxpbmstY29sb3IpO1xyXG59XHJcbi5zZWFyY2gtZmllbGRzZXQge1xyXG4gIG1heC13aWR0aDogNTAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xyXG59XHJcbi5zZWFyY2gtYnV0dG9uLFxyXG4uc2VhcmNoLXJlc2V0LWJ1dHRvbiB7XHJcbiAgbWFyZ2luLWxlZnQ6IDhweDtcclxufVxyXG4uc2VhcmNoLWZpZWxkIHtcclxuICBmbGV4OiAxIDAgMTAwcHg7XHJcbn1cclxuLmZpbHRlciB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuLmgxIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmFwcC1jb250YWluZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBmbGV4OiAxIDAgMjAwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcbi5hcHAtdGFibGUge1xyXG4gIG1pbi13aWR0aDogNDYwcHg7XHJcbn1cclxuXHJcbi5tYXQtcGFnaW5hdG9yLFxyXG4uYXBwLXRhYmxlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hcHAtYmctY29sb3IpO1xyXG59XHJcblxyXG4uYXBwLXRhYmxlLWNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGZsZXg6IDEgMCAyMDBweDtcclxuICBvdmVyZmxvdzogYXV0bztcclxuXHJcbiAgbWF0LWNlbGwge1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG4gIH1cclxufVxyXG50YWJsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmFwcC1sb2FkaW5nLXNoYWRlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYm90dG9tOiA1NnB4O1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbiAgei1pbmRleDogMTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLmFwcC1yYXRlLWxpbWl0LXJlYWNoZWQge1xyXG4gIGNvbG9yOiAjZDUwMDAwO1xyXG4gIG1heC13aWR0aDogMzYwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uZWxlbWVudC1yb3c6bm90KC5uby1kZXRhaWxzKSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ob3Zlci1yb3ctYmctY29sb3IpO1xyXG4gIH1cclxuICAmLmV4cGFuZGVkIHtcclxuICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXItcm93LWJnLWNvbG9yKTtcclxuICB9XHJcbn1cclxuLmVsZW1lbnQtZGV0YWlsLXJvdyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGV0YWlsLWJnLWNvbG9yKTtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLDAsMCwuMTIpO1xyXG4gIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XHJcblxyXG4gIHA6bm90KDpmaXJzdC1jaGlsZCkge1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICB9XHJcblxyXG4gIG1hdC1jZWxsIHtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgfVxyXG59XHJcblxyXG4ubWF0LXBhZ2luYXRvcixcclxuLm1hdC1oZWFkZXItY2VsbCxcclxuLm1hdC1jZWxsLCBcclxuLm1hdC1mb290ZXItY2VsbCB7XHJcbiAgY29sb3I6IGluaGVyaXQ7XHJcbn1cclxuLm1hdC1jb2x1bW4tbnVtYmVyLFxyXG4ubWF0LWNvbHVtbi1zdGF0ZSB7XHJcbiAgbWF4LXdpZHRoOiAxMDBweDtcclxufVxyXG4ubWF0LWNvbHVtbi1jcmVhdGVkIHtcclxuICBtYXgtd2lkdGg6IDEzMHB4O1xyXG59XHJcbi5tYXQtaGVhZGVyLXJvdyB7XHJcbiAgYm94LXNoYWRvdzogMCAtNHB4IDVweCAjMDAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxOTFjMjU7XHJcbn1cclxubWF0LXJvdyB7XHJcbiAgbWluLWhlaWdodDogMzBweDtcclxufVxyXG5cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xyXG4gIC5oMSB7XHJcbiAgICBmb250LXNpemU6IDMycHg7XHJcbiAgfVxyXG59IiwiLnJvb3QtY29udGFpbmVyIHtcbiAgcGFkZGluZzogMCAxMHB4IDEwcHg7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB2YXIoLS1yb290LWJhY2tncm91bmQtaW1hZ2UpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlIDA7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcbiAgYW5pbWF0aW9uOiBiYWNrZ3JvdW5kLW9mZnNldCAxMHMgZWFzZS1pbi1vdXQgaW5maW5pdGUgYWx0ZXJuYXRlO1xufVxuXG4uaDEge1xuICBtYXJnaW46IDE1cHggMDtcbiAgZm9udC1zaXplOiAzNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5saW5rIHtcbiAgY29sb3I6IHZhcigtLWxpbmstY29sb3IpO1xufVxuXG4uc2VhcmNoLWZpZWxkc2V0IHtcbiAgbWF4LXdpZHRoOiA1MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbn1cblxuLnNlYXJjaC1idXR0b24sXG4uc2VhcmNoLXJlc2V0LWJ1dHRvbiB7XG4gIG1hcmdpbi1sZWZ0OiA4cHg7XG59XG5cbi5zZWFyY2gtZmllbGQge1xuICBmbGV4OiAxIDAgMTAwcHg7XG59XG5cbi5maWx0ZXIge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmgxIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYXBwLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZmxleDogMSAwIDIwMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uYXBwLXRhYmxlIHtcbiAgbWluLXdpZHRoOiA0NjBweDtcbn1cblxuLm1hdC1wYWdpbmF0b3IsXG4uYXBwLXRhYmxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYXBwLWJnLWNvbG9yKTtcbn1cblxuLmFwcC10YWJsZS1jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZsZXg6IDEgMCAyMDBweDtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG4uYXBwLXRhYmxlLWNvbnRhaW5lciBtYXQtY2VsbCB7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG59XG5cbnRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5hcHAtbG9hZGluZy1zaGFkZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDU2cHg7XG4gIHJpZ2h0OiAwO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICB6LWluZGV4OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmFwcC1yYXRlLWxpbWl0LXJlYWNoZWQge1xuICBjb2xvcjogI2Q1MDAwMDtcbiAgbWF4LXdpZHRoOiAzNjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZWxlbWVudC1yb3c6bm90KC5uby1kZXRhaWxzKSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmVsZW1lbnQtcm93Om5vdCgubm8tZGV0YWlscyk6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ob3Zlci1yb3ctYmctY29sb3IpO1xufVxuLmVsZW1lbnQtcm93Om5vdCgubm8tZGV0YWlscykuZXhwYW5kZWQge1xuICBib3JkZXItYm90dG9tLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXItcm93LWJnLWNvbG9yKTtcbn1cblxuLmVsZW1lbnQtZGV0YWlsLXJvdyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRldGFpbC1iZy1jb2xvcik7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xufVxuLmVsZW1lbnQtZGV0YWlsLXJvdyBwOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi5lbGVtZW50LWRldGFpbC1yb3cgbWF0LWNlbGwge1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufVxuXG4ubWF0LXBhZ2luYXRvcixcbi5tYXQtaGVhZGVyLWNlbGwsXG4ubWF0LWNlbGwsXG4ubWF0LWZvb3Rlci1jZWxsIHtcbiAgY29sb3I6IGluaGVyaXQ7XG59XG5cbi5tYXQtY29sdW1uLW51bWJlcixcbi5tYXQtY29sdW1uLXN0YXRlIHtcbiAgbWF4LXdpZHRoOiAxMDBweDtcbn1cblxuLm1hdC1jb2x1bW4tY3JlYXRlZCB7XG4gIG1heC13aWR0aDogMTMwcHg7XG59XG5cbi5tYXQtaGVhZGVyLXJvdyB7XG4gIGJveC1zaGFkb3c6IDAgLTRweCA1cHggIzAwMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE5MWMyNTtcbn1cblxubWF0LXJvdyB7XG4gIG1pbi1oZWlnaHQ6IDMwcHg7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xuICAuaDEge1xuICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _services_planets_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/planets.service */ "./src/app/services/planets.service.ts");
/* harmony import */ var _services_mock_planets__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/mock.planets */ "./src/app/services/mock.planets.js");
/* harmony import */ var _services_mock_details__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/mock.details */ "./src/app/services/mock.details.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./config */ "./src/app/config.js");










var AppComponent = /** @class */ (function () {
    function AppComponent(PlanetService) {
        this.PlanetService = PlanetService;
        this.mockDetails = _services_mock_details__WEBPACK_IMPORTED_MODULE_8__["default"];
        this.displayedColumns = [
            'name',
            'terrain',
            'population',
            'residents_amount',
            'films_amount'
        ];
        this.isLoadingResults = true;
        this.isRateLimitReached = false;
        this.data = [];
        this.resultsLength = 0;
        this.pageSizeOptions = _config__WEBPACK_IMPORTED_MODULE_9__["default"].api.planets.includes('https:') ? [10] : [10, 20, 50];
        this.isExpansionDetailRow = function (i, row) { return row.hasOwnProperty('detailRow'); };
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sort.sortChange.subscribe(function () { return _this.paginator.pageIndex = 0; });
        Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(this.sort.sortChange, this.paginator.page)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])({}), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function () {
            _this.isLoadingResults = true;
            return _this.PlanetService.getData(_this.sort, _this.paginator);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(this.onPlanetsSuccess.bind(this)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function () {
            if (_services_mock_planets__WEBPACK_IMPORTED_MODULE_7__["default"]) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(_this.onPlanetsSuccess(_services_mock_planets__WEBPACK_IMPORTED_MODULE_7__["default"]));
            }
            _this.isLoadingResults = false;
            _this.isRateLimitReached = true;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])([]);
        })).subscribe(function (data) { return _this.data = data; });
    };
    AppComponent.prototype.onRowClick = function (event, row) {
        if (row.noDetails) {
            return;
        }
        if (this.expandedElement === row) {
            this.expandedElement = null;
        }
        else {
            this.expandedElement = row;
        }
    };
    AppComponent.prototype.onPlanetsSuccess = function (data) {
        this.isLoadingResults = false;
        this.isRateLimitReached = false;
        this.resultsLength = data.count;
        var result = [];
        if (data.results) {
            data.results.forEach(function (item) {
                if (!item.films.length && !item.residents.length) {
                    item.noDetails = true;
                }
                result.push(item, {
                    detailRow: true,
                    loaded: false,
                    item: item
                });
            });
        }
        return result;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], AppComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], AppComponent.prototype, "sort", void 0);
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["trigger"])('detailExpand', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["state"])('collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ height: '0px', minHeight: '0', visibility: 'hidden' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ height: '*', visibility: 'visible' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])('expanded <=> collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
                ])
            ],
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_planets_service__WEBPACK_IMPORTED_MODULE_6__["default"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./material-module */ "./src/app/material-module.ts");
/* harmony import */ var _services_planets_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/planets.service */ "./src/app/services/planets.service.ts");
/* harmony import */ var _pipes_population_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pipes/population.pipe */ "./src/app/pipes/population.pipe.ts");









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _pipes_population_pipe__WEBPACK_IMPORTED_MODULE_8__["PopulationPipe"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"]
            ],
            providers: [
                _services_planets_service__WEBPACK_IMPORTED_MODULE_7__["default"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/config.js":
/*!***************************!*\
  !*** ./src/app/config.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  api: {
    planets: 'https://swapi.dev/api/planets/' // '/api/planets/' - request to own server
  }
});

/***/ }),

/***/ "./src/app/material-module.ts":
/*!************************************!*\
  !*** ./src/app/material-module.ts ***!
  \************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm5/tree.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");







var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__["CdkTableModule"],
                _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_4__["CdkTreeModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["DragDropModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTreeModule"],
                _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["ScrollingModule"],
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/pipes/population.pipe.ts":
/*!******************************************!*\
  !*** ./src/app/pipes/population.pipe.ts ***!
  \******************************************/
/*! exports provided: PopulationPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopulationPipe", function() { return PopulationPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PopulationPipe = /** @class */ (function () {
    function PopulationPipe() {
    }
    PopulationPipe.prototype.transform = function (value, args) {
        var hasLetters = isNaN(+value);
        if (hasLetters) {
            return value;
        }
        value = +value;
        if (value < 1000) {
            return value;
        }
        var exp = Math.floor(Math.log(value) / Math.log(1000));
        var suffixes = ['k', 'm', 'b'];
        if (exp > 3) {
            exp = 3;
        }
        return (value / Math.pow(1000, exp)).toFixed(args) + suffixes[exp - 1];
    };
    PopulationPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'population'
        })
    ], PopulationPipe);
    return PopulationPipe;
}());



/***/ }),

/***/ "./src/app/services/mock.details.js":
/*!******************************************!*\
  !*** ./src/app/services/mock.details.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  // Films
  'https://swapi.dev/api/films/1/': {
    "title": "A New Hope",
    link: 'https://www.youtube.com/watch?v=nbTK3KE6748'
  },
  'https://swapi.dev/api/films/2/': {
    "title": "The Empire Strikes Back",
    link: 'https://www.youtube.com/watch?v=4_46P3Dzvvw'
  },
  'https://swapi.dev/api/films/3/': {
    "title": "Return of the Jedi",
    link: 'https://www.youtube.com/watch?v=elvp0H0oM48'
  },
  'https://swapi.dev/api/films/4/': {
    "title": "The Phantom Menace",
    link: 'https://www.youtube.com/watch?v=mlF4VwaKMxM'
  },
  'https://swapi.dev/api/films/5/': {
    "title": "Attack of the Clones",
    link: 'https://www.youtube.com/watch?v=6DACKXQTaRQ'
  },
  'https://swapi.dev/api/films/6/': {
    "title": "Revenge of the Sith",
    link: 'https://www.youtube.com/watch?v=BQ1kR64uaRI'
  },
  // Residents
  'https://swapi.dev/api/people/1/': {
    "name": "Luke Skywalker",
    link: 'https://www.starwars.com/databank/luke-skywalker'
  },
  'https://swapi.dev/api/people/2/': {
    "name": "C-3PO",
    link: 'https://www.starwars.com/databank/c-3po'
  },
  'https://swapi.dev/api/people/3/': {
    "name": "R2-D2",
    link: 'https://www.starwars.com/databank/r2-d2'
  },
  'https://swapi.dev/api/people/4/': {
    "name": "Darth Vader",
    link: 'https://www.starwars.com/databank/darth-vader'
  },
  'https://swapi.dev/api/people/5/': {
    "name": "Leia Organa",
    link: 'https://www.starwars.com/databank/leia-organa'
  },
  'https://swapi.dev/api/people/6/': {
    "name": "Owen Lars",
    link: 'https://www.starwars.com/databank/owen-lars'
  },
  'https://swapi.dev/api/people/7/': {
    "name": "Beru Lars",
    link: 'https://www.starwars.com/databank/beru-lars'
  },
  'https://swapi.dev/api/people/8/': {
    "name": "R5-D4",
    link: 'https://www.starwars.com/databank/r5-d4'
  },
  'https://swapi.dev/api/people/9/': {
    "name": "Biggs Darklighter",
    link: 'https://www.starwars.com/databank/biggs-darklighter'
  },
  'https://swapi.dev/api/people/11/': {
    "name": "Anakin Skywalker",
    link: 'https://www.starwars.com/databank/anakin-skywalker'
  },
  'https://swapi.dev/api/people/21/': {
    "name": "Palpatine"
  },
  'https://swapi.dev/api/people/22/': {
    "name": "Boba Fett"
  },
  'https://swapi.dev/api/people/26/': {
    "name": "Lobot",
    link: 'https://www.starwars.com/databank/lobot'
  },
  'https://swapi.dev/api/people/30/': {
    "name": "Wicket Systri Warrick",
    link: 'https://www.starwars.com/databank/wicket-w-warrick'
  },
  'https://swapi.dev/api/people/34/': {
    "name": "Finis Valorum"
  },
  'https://swapi.dev/api/people/35/': {
    "name": "Padmé Amidala"
  },
  'https://swapi.dev/api/people/36/': {
    "name": "Jar Jar Binks"
  },
  'https://swapi.dev/api/people/37/': {
    "name": "Roos Tarpals"
  },
  'https://swapi.dev/api/people/38/': {
    "name": "Rugor Nass"
  },
  'https://swapi.dev/api/people/39/': {
    "name": "Ric Olié"
  },
  'https://swapi.dev/api/people/42/': {
    "name": "Quarsh Panaka"
  },
  'https://swapi.dev/api/people/43/': {
    "name": "Shmi Skywalker",
    link: 'https://www.starwars.com/databank/shmi-skywalker-lars'
  },
  'https://swapi.dev/api/people/55/': {
    "name": "Adi Gallia"
  },
  'https://swapi.dev/api/people/60/': {
    "name": "Gregar Typho"
  },
  'https://swapi.dev/api/people/61/': {
    "name": "Cordé"
  },
  'https://swapi.dev/api/people/62/': {
    "name": "Cliegg Lars",
    link: 'https://www.starwars.com/databank/cliegg-lars'
  },
  'https://swapi.dev/api/people/66/': {
    "name": "Dormé"
  },
  'https://swapi.dev/api/people/68/': {
    "name": "Bail Prestor Organa",
    link: 'https://www.starwars.com/databank/bail-organa'
  },
  'https://swapi.dev/api/people/72/': {
    "name": "Lama Su"
  },
  'https://swapi.dev/api/people/73/': {
    "name": "Taun We"
  },
  'https://swapi.dev/api/people/74/': {
    "name": "Jocasta Nu"
  },
  'https://swapi.dev/api/people/81/': {
    "name": "Raymus Antilles",
    link: 'https://www.starwars.com/databank/captain-antilles'
  }
});

/***/ }),

/***/ "./src/app/services/mock.planets.js":
/*!******************************************!*\
  !*** ./src/app/services/mock.planets.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  "count": 9,
  "previous": null,
  "results": [
    {
      "name": "Tatooine",
      "rotation_period": "23",
      "orbital_period": "304",
      "diameter": "10465",
      "climate": "arid",
      "gravity": "1 standard",
      "terrain": "desert",
      "surface_water": "1",
      "population": "200000",
      "residents": [
        "https://swapi.dev/api/people/1/",
        "https://swapi.dev/api/people/2/",
        "https://swapi.dev/api/people/4/",
        "https://swapi.dev/api/people/6/",
        "https://swapi.dev/api/people/7/",
        "https://swapi.dev/api/people/8/",
        "https://swapi.dev/api/people/9/",
        "https://swapi.dev/api/people/11/",
        "https://swapi.dev/api/people/43/",
        "https://swapi.dev/api/people/62/"
      ],
      "films": [
        "https://swapi.dev/api/films/1/",
        "https://swapi.dev/api/films/3/",
        "https://swapi.dev/api/films/4/",
        "https://swapi.dev/api/films/5/",
        "https://swapi.dev/api/films/6/"
      ],
      "created": "2014-12-09T13:50:49.641000Z",
      "edited": "2014-12-20T20:58:18.411000Z",
      "url": "https://swapi.dev/api/planets/1/"
    },
    {
      "name": "Alderaan",
      "rotation_period": "24",
      "orbital_period": "364",
      "diameter": "12500",
      "climate": "temperate",
      "gravity": "1 standard",
      "terrain": "grasslands, mountains",
      "surface_water": "40",
      "population": "2000000000",
      "residents": [
        "https://swapi.dev/api/people/5/",
        "https://swapi.dev/api/people/68/",
        "https://swapi.dev/api/people/81/"
      ],
      "films": [
        "https://swapi.dev/api/films/1/",
        "https://swapi.dev/api/films/6/"
      ],
      "created": "2014-12-10T11:35:48.479000Z",
      "edited": "2014-12-20T20:58:18.420000Z",
      "url": "https://swapi.dev/api/planets/2/"
    },
    {
      "name": "Yavin IV",
      "rotation_period": "24",
      "orbital_period": "4818",
      "diameter": "10200",
      "climate": "temperate, tropical",
      "gravity": "1 standard",
      "terrain": "jungle, rainforests",
      "surface_water": "8",
      "population": "1000",
      "residents": [],
      "films": [
        "https://swapi.dev/api/films/1/"
      ],
      "created": "2014-12-10T11:37:19.144000Z",
      "edited": "2014-12-20T20:58:18.421000Z",
      "url": "https://swapi.dev/api/planets/3/"
    },
    {
      "name": "Hoth",
      "rotation_period": "23",
      "orbital_period": "549",
      "diameter": "7200",
      "climate": "frozen",
      "gravity": "1.1 standard",
      "terrain": "tundra, ice caves, mountain ranges",
      "surface_water": "100",
      "population": "unknown",
      "residents": [],
      "films": [
        "https://swapi.dev/api/films/2/"
      ],
      "created": "2014-12-10T11:39:13.934000Z",
      "edited": "2014-12-20T20:58:18.423000Z",
      "url": "https://swapi.dev/api/planets/4/"
    },
    {
      "name": "Dagobah",
      "rotation_period": "23",
      "orbital_period": "341",
      "diameter": "8900",
      "climate": "murky",
      "gravity": "N/A",
      "terrain": "swamp, jungles",
      "surface_water": "8",
      "population": "unknown",
      "residents": [],
      "films": [
        "https://swapi.dev/api/films/2/",
        "https://swapi.dev/api/films/3/",
        "https://swapi.dev/api/films/6/"
      ],
      "created": "2014-12-10T11:42:22.590000Z",
      "edited": "2014-12-20T20:58:18.425000Z",
      "url": "https://swapi.dev/api/planets/5/"
    },
    {
      "name": "Bespin",
      "rotation_period": "12",
      "orbital_period": "5110",
      "diameter": "118000",
      "climate": "temperate",
      "gravity": "1.5 (surface), 1 standard (Cloud City)",
      "terrain": "gas giant",
      "surface_water": "0",
      "population": "6000000",
      "residents": [
        "https://swapi.dev/api/people/26/"
      ],
      "films": [
        "https://swapi.dev/api/films/2/"
      ],
      "created": "2014-12-10T11:43:55.240000Z",
      "edited": "2014-12-20T20:58:18.427000Z",
      "url": "https://swapi.dev/api/planets/6/"
    },
    {
      "name": "Endor",
      "rotation_period": "18",
      "orbital_period": "402",
      "diameter": "4900",
      "climate": "temperate",
      "gravity": "0.85 standard",
      "terrain": "forests, mountains, lakes",
      "surface_water": "8",
      "population": "30000000",
      "residents": [
        "https://swapi.dev/api/people/30/"
      ],
      "films": [
        "https://swapi.dev/api/films/3/"
      ],
      "created": "2014-12-10T11:50:29.349000Z",
      "edited": "2014-12-20T20:58:18.429000Z",
      "url": "https://swapi.dev/api/planets/7/"
    },
    {
      "name": "Naboo",
      "rotation_period": "26",
      "orbital_period": "312",
      "diameter": "12120",
      "climate": "temperate",
      "gravity": "1 standard",
      "terrain": "grassy hills, swamps, forests, mountains",
      "surface_water": "12",
      "population": "4500000000",
      "residents": [
        "https://swapi.dev/api/people/3/",
        "https://swapi.dev/api/people/21/",
        "https://swapi.dev/api/people/35/",
        "https://swapi.dev/api/people/36/",
        "https://swapi.dev/api/people/37/",
        "https://swapi.dev/api/people/38/",
        "https://swapi.dev/api/people/39/",
        "https://swapi.dev/api/people/42/",
        "https://swapi.dev/api/people/60/",
        "https://swapi.dev/api/people/61/",
        "https://swapi.dev/api/people/66/"
      ],
      "films": [
        "https://swapi.dev/api/films/3/",
        "https://swapi.dev/api/films/4/",
        "https://swapi.dev/api/films/5/",
        "https://swapi.dev/api/films/6/"
      ],
      "created": "2014-12-10T11:52:31.066000Z",
      "edited": "2014-12-20T20:58:18.430000Z",
      "url": "https://swapi.dev/api/planets/8/"
    },
    {
      "name": "Coruscant",
      "rotation_period": "24",
      "orbital_period": "368",
      "diameter": "12240",
      "climate": "temperate",
      "gravity": "1 standard",
      "terrain": "cityscape, mountains",
      "surface_water": "unknown",
      "population": "1000000000000",
      "residents": [
        "https://swapi.dev/api/people/34/",
        "https://swapi.dev/api/people/55/",
        "https://swapi.dev/api/people/74/"
      ],
      "films": [
        "https://swapi.dev/api/films/3/",
        "https://swapi.dev/api/films/4/",
        "https://swapi.dev/api/films/5/",
        "https://swapi.dev/api/films/6/"
      ],
      "created": "2014-12-10T11:54:13.921000Z",
      "edited": "2014-12-20T20:58:18.432000Z",
      "url": "https://swapi.dev/api/planets/9/"
    }
  ]
});

/***/ }),

/***/ "./src/app/services/planets.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/planets.service.ts ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../config */ "./src/app/config.js");




var PlanetService = /** @class */ (function () {
    function PlanetService(http) {
        this.http = http;
        this.apiUrl = _config__WEBPACK_IMPORTED_MODULE_3__["default"].api.planets;
    }
    PlanetService.prototype.getData = function (sort, paginator) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        var pageSize = paginator.pageSize || 10;
        params = params.append('page', "" + (paginator.pageIndex + 1));
        params = params.append('limit', "" + pageSize);
        if (sort.active) {
            params = params.append('sort', sort.active);
        }
        if (sort.direction) {
            params = params.append('order', sort.direction);
        }
        return this.http.get(this.apiUrl, { params: params });
    };
    PlanetService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PlanetService);
    return PlanetService;
}());
/* harmony default export */ __webpack_exports__["default"] = (PlanetService);


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\My apps\angular-swapi-table\client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map