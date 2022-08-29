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

module.exports = "<div class=\"root-container\">\r\n  <h1 class=\"h1\">Star Wars planets</h1>\r\n\r\n  <div class=\"app-container mat-elevation-z8\">\r\n    <div class=\"app-loading-shade\"\r\n        *ngIf=\"isLoadingResults || isRateLimitReached\">\r\n      <mat-spinner *ngIf=\"isLoadingResults\"></mat-spinner>\r\n      <div class=\"app-rate-limit-reached\" *ngIf=\"isRateLimitReached\">\r\n        No data.\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"app-table-container\">\r\n      <mat-table\r\n        [dataSource]=\"data\"\r\n        class=\"app-table\"\r\n        matSort\r\n        matSortActive=\"created\"\r\n        matSortDisableClear\r\n        matSortDirection=\"asc\">\r\n\r\n        <ng-container matColumnDef=\"name\">\r\n          <mat-header-cell *matHeaderCellDef>Name</mat-header-cell>\r\n          <mat-cell  *matCellDef=\"let row\">{{row.name}}</mat-cell>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"terrain\">\r\n          <mat-header-cell  *matHeaderCellDef>Terrain</mat-header-cell>\r\n          <mat-cell  *matCellDef=\"let row\">{{row.terrain}}</mat-cell>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"population\">\r\n          <mat-header-cell  *matHeaderCellDef>Population</mat-header-cell>\r\n          <mat-cell  *matCellDef=\"let row\">{{row.population | population}}</mat-cell>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"residents_amount\">\r\n          <mat-header-cell  *matHeaderCellDef>Residents amount</mat-header-cell>\r\n          <mat-cell  *matCellDef=\"let row\">{{row.residents.length}}</mat-cell>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"films_amount\">\r\n          <mat-header-cell  *matHeaderCellDef>Films amount</mat-header-cell>\r\n          <mat-cell  *matCellDef=\"let row\">{{row.films.length}}</mat-cell>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"expandedDetail\">\r\n          <mat-cell *matCellDef=\"let row\" [attr.colspan]=\"displayedColumns.length\">\r\n            <p *ngIf=\"row.item.films && row.item.films.length\">\r\n              <b>Films: </b> \r\n              <ng-container *ngFor=\"let film of row.item.films; last as isLast; index as i\">\r\n                <a [href]=\"film\" class=\"link\" target=\"_blank\">Film {{i+1}}</a>\r\n                <ng-container *ngIf=\"!isLast\">, </ng-container>\r\n              </ng-container>\r\n            </p>\r\n            <p *ngIf=\"row.item.residents && row.item.residents.length\">\r\n              <b>Residents: </b>\r\n              <ng-container *ngFor=\"let resident of row.item.residents; last as isLast; index as i\">\r\n                <a [href]=\"resident\" class=\"link\" target=\"_blank\">Resident {{i+1}}</a>\r\n                <ng-container *ngIf=\"!isLast\">, </ng-container>\r\n              </ng-container>\r\n            </p>\r\n          </mat-cell>\r\n        </ng-container>\r\n\r\n        <mat-header-row  \r\n          *matHeaderRowDef=\"displayedColumns; sticky: true;\"\r\n          class=\"header-row\"></mat-header-row>\r\n\r\n        <mat-row\r\n          *matRowDef=\"let row; columns: displayedColumns;\"\r\n          matRipple\r\n          class=\"element-row\"\r\n          [class.no-details]=\"row.noDetails\"\r\n          [class.expanded]=\"expandedElement == row\"\r\n          (click)=\"onRowClick($event, row)\"></mat-row>\r\n\r\n        <mat-row\r\n          *matRowDef=\"let row; columns: ['expandedDetail']; when: isExpansionDetailRow\"\r\n          class=\"element-detail-row\"\r\n          [@detailExpand]=\"row.item == expandedElement ? 'expanded' : 'collapsed'\"\r\n          style=\"overflow: hidden\"></mat-row>\r\n      </mat-table>\r\n    </div>\r\n\r\n    <mat-paginator class=\"mat-paginator\" [length]=\"resultsLength\" [pageSizeOptions]=\"[10, 20, 50, 100]\"></mat-paginator>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".root-container {\n  padding: 0 10px 10px;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  background-image: var(--root-background-image);\n  background-size: cover;\n  background-position: right;\n  color: var(--text-color);\n}\n\n.h1 {\n  text-shadow: var(--header-text-shadow);\n  color: yellow;\n  font-size: 28px;\n}\n\n.link {\n  color: var(--link-color);\n}\n\n.search-fieldset {\n  max-width: 50%;\n  display: flex;\n  align-items: baseline;\n}\n\n.search-button,\n.search-reset-button {\n  margin-left: 8px;\n}\n\n.search-field {\n  flex: 1 0 100px;\n}\n\n.filter {\n  display: block;\n}\n\n.h1 {\n  text-align: center;\n}\n\n.app-container {\n  position: relative;\n  flex: 1 0 200px;\n  display: flex;\n  flex-direction: column;\n}\n\n.app-table {\n  min-width: 460px;\n}\n\n.mat-paginator,\n.app-table {\n  background-color: var(--app-bg-color);\n}\n\n.app-table-container {\n  position: relative;\n  flex: 1 0 200px;\n  overflow: auto;\n}\n\n.app-table-container mat-cell {\n  line-height: 1.5;\n  padding-top: 5px;\n  padding-bottom: 5px;\n}\n\ntable {\n  width: 100%;\n}\n\n.app-loading-shade {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 56px;\n  right: 0;\n  background: rgba(0, 0, 0, 0.15);\n  z-index: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.app-rate-limit-reached {\n  color: #d50000;\n  max-width: 360px;\n  text-align: center;\n}\n\n.element-row:not(.no-details) {\n  position: relative;\n  cursor: pointer;\n}\n\n.element-row:not(.no-details):hover {\n  background-color: var(--hover-row-bg-color);\n}\n\n.element-row:not(.no-details).expanded {\n  border-bottom-color: transparent;\n}\n\n.element-detail-row {\n  background-color: var(--detail-bg-color);\n}\n\n.element-detail-row p:not(:first-child) {\n  margin-top: 10px;\n}\n\n.element-detail-row mat-cell {\n  padding-top: 10px;\n  padding-bottom: 10px;\n  flex-direction: column;\n  align-items: flex-start;\n}\n\n.mat-paginator,\n.mat-header-cell,\n.mat-cell,\n.mat-footer-cell {\n  color: inherit;\n}\n\n.mat-column-number,\n.mat-column-state {\n  max-width: 100px;\n}\n\n.mat-column-created {\n  max-width: 130px;\n}\n\n.mat-header-row {\n  box-shadow: 0 -4px 5px #000;\n  background-color: #191c25;\n}\n\nmat-row {\n  min-height: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXE15IGFwcHNcXGFuZ3VsYXItc3dhcGktdGFibGVcXGNsaWVudC9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsOENBQUE7RUFDQSxzQkFBQTtFQUNBLDBCQUFBO0VBQ0Esd0JBQUE7QUNDRjs7QURDQTtFQUNFLHNDQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QUNFRjs7QURBQTtFQUNFLHdCQUFBO0FDR0Y7O0FEREE7RUFDRSxjQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0FDSUY7O0FERkE7O0VBRUUsZ0JBQUE7QUNLRjs7QURIQTtFQUNFLGVBQUE7QUNNRjs7QURKQTtFQUNFLGNBQUE7QUNPRjs7QURMQTtFQUNFLGtCQUFBO0FDUUY7O0FETkE7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUNTRjs7QURQQTtFQUNFLGdCQUFBO0FDVUY7O0FEUEE7O0VBRUUscUNBQUE7QUNVRjs7QURQQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNVRjs7QURSRTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ1VKOztBRFBBO0VBQ0UsV0FBQTtBQ1VGOztBRFJBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSxRQUFBO0VBQ0EsK0JBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNXRjs7QURUQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDWUY7O0FEVEE7RUFDRSxrQkFBQTtFQUNBLGVBQUE7QUNZRjs7QURWRTtFQUNFLDJDQUFBO0FDWUo7O0FEVkU7RUFDRSxnQ0FBQTtBQ1lKOztBRFRBO0VBQ0Usd0NBQUE7QUNZRjs7QURWRTtFQUNFLGdCQUFBO0FDWUo7O0FEVEU7RUFDRSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBQ1dKOztBRFBBOzs7O0VBSUUsY0FBQTtBQ1VGOztBRFJBOztFQUVFLGdCQUFBO0FDV0Y7O0FEVEE7RUFDRSxnQkFBQTtBQ1lGOztBRFZBO0VBQ0UsMkJBQUE7RUFDQSx5QkFBQTtBQ2FGOztBRFhBO0VBQ0UsZ0JBQUE7QUNjRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb290LWNvbnRhaW5lciB7XHJcbiAgcGFkZGluZzogMCAxMHB4IDEwcHg7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHZhcigtLXJvb3QtYmFja2dyb3VuZC1pbWFnZSk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodDtcclxuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XHJcbn1cclxuLmgxIHtcclxuICB0ZXh0LXNoYWRvdzogdmFyKC0taGVhZGVyLXRleHQtc2hhZG93KTtcclxuICBjb2xvcjogeWVsbG93O1xyXG4gIGZvbnQtc2l6ZTogMjhweDtcclxufVxyXG4ubGluayB7XHJcbiAgY29sb3I6IHZhcigtLWxpbmstY29sb3IpO1xyXG59XHJcbi5zZWFyY2gtZmllbGRzZXQge1xyXG4gIG1heC13aWR0aDogNTAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xyXG59XHJcbi5zZWFyY2gtYnV0dG9uLFxyXG4uc2VhcmNoLXJlc2V0LWJ1dHRvbiB7XHJcbiAgbWFyZ2luLWxlZnQ6IDhweDtcclxufVxyXG4uc2VhcmNoLWZpZWxkIHtcclxuICBmbGV4OiAxIDAgMTAwcHg7XHJcbn1cclxuLmZpbHRlciB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuLmgxIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmFwcC1jb250YWluZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBmbGV4OiAxIDAgMjAwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcbi5hcHAtdGFibGUge1xyXG4gIG1pbi13aWR0aDogNDYwcHg7XHJcbn1cclxuXHJcbi5tYXQtcGFnaW5hdG9yLFxyXG4uYXBwLXRhYmxlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hcHAtYmctY29sb3IpO1xyXG59XHJcblxyXG4uYXBwLXRhYmxlLWNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGZsZXg6IDEgMCAyMDBweDtcclxuICBvdmVyZmxvdzogYXV0bztcclxuXHJcbiAgbWF0LWNlbGwge1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG4gIH1cclxufVxyXG50YWJsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmFwcC1sb2FkaW5nLXNoYWRlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYm90dG9tOiA1NnB4O1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbiAgei1pbmRleDogMTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLmFwcC1yYXRlLWxpbWl0LXJlYWNoZWQge1xyXG4gIGNvbG9yOiAjZDUwMDAwO1xyXG4gIG1heC13aWR0aDogMzYwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uZWxlbWVudC1yb3c6bm90KC5uby1kZXRhaWxzKSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ob3Zlci1yb3ctYmctY29sb3IpO1xyXG4gIH1cclxuICAmLmV4cGFuZGVkIHtcclxuICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIH1cclxufVxyXG4uZWxlbWVudC1kZXRhaWwtcm93IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kZXRhaWwtYmctY29sb3IpO1xyXG5cclxuICBwOm5vdCg6Zmlyc3QtY2hpbGQpIHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgfVxyXG5cclxuICBtYXQtY2VsbCB7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gIH1cclxufVxyXG5cclxuLm1hdC1wYWdpbmF0b3IsXHJcbi5tYXQtaGVhZGVyLWNlbGwsXHJcbi5tYXQtY2VsbCwgXHJcbi5tYXQtZm9vdGVyLWNlbGwge1xyXG4gIGNvbG9yOiBpbmhlcml0O1xyXG59XHJcbi5tYXQtY29sdW1uLW51bWJlcixcclxuLm1hdC1jb2x1bW4tc3RhdGUge1xyXG4gIG1heC13aWR0aDogMTAwcHg7XHJcbn1cclxuLm1hdC1jb2x1bW4tY3JlYXRlZCB7XHJcbiAgbWF4LXdpZHRoOiAxMzBweDtcclxufVxyXG4ubWF0LWhlYWRlci1yb3cge1xyXG4gIGJveC1zaGFkb3c6IDAgLTRweCA1cHggIzAwMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTkxYzI1O1xyXG59XHJcbm1hdC1yb3cge1xyXG4gIG1pbi1oZWlnaHQ6IDMwcHg7XHJcbn1cclxuIiwiLnJvb3QtY29udGFpbmVyIHtcbiAgcGFkZGluZzogMCAxMHB4IDEwcHg7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB2YXIoLS1yb290LWJhY2tncm91bmQtaW1hZ2UpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodDtcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xufVxuXG4uaDEge1xuICB0ZXh0LXNoYWRvdzogdmFyKC0taGVhZGVyLXRleHQtc2hhZG93KTtcbiAgY29sb3I6IHllbGxvdztcbiAgZm9udC1zaXplOiAyOHB4O1xufVxuXG4ubGluayB7XG4gIGNvbG9yOiB2YXIoLS1saW5rLWNvbG9yKTtcbn1cblxuLnNlYXJjaC1maWVsZHNldCB7XG4gIG1heC13aWR0aDogNTAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG59XG5cbi5zZWFyY2gtYnV0dG9uLFxuLnNlYXJjaC1yZXNldC1idXR0b24ge1xuICBtYXJnaW4tbGVmdDogOHB4O1xufVxuXG4uc2VhcmNoLWZpZWxkIHtcbiAgZmxleDogMSAwIDEwMHB4O1xufVxuXG4uZmlsdGVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5oMSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmFwcC1jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZsZXg6IDEgMCAyMDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmFwcC10YWJsZSB7XG4gIG1pbi13aWR0aDogNDYwcHg7XG59XG5cbi5tYXQtcGFnaW5hdG9yLFxuLmFwcC10YWJsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFwcC1iZy1jb2xvcik7XG59XG5cbi5hcHAtdGFibGUtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmbGV4OiAxIDAgMjAwcHg7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuLmFwcC10YWJsZS1jb250YWluZXIgbWF0LWNlbGwge1xuICBsaW5lLWhlaWdodDogMS41O1xuICBwYWRkaW5nLXRvcDogNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xufVxuXG50YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uYXBwLWxvYWRpbmctc2hhZGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiA1NnB4O1xuICByaWdodDogMDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiAgei1pbmRleDogMTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5hcHAtcmF0ZS1saW1pdC1yZWFjaGVkIHtcbiAgY29sb3I6ICNkNTAwMDA7XG4gIG1heC13aWR0aDogMzYwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmVsZW1lbnQtcm93Om5vdCgubm8tZGV0YWlscykge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5lbGVtZW50LXJvdzpub3QoLm5vLWRldGFpbHMpOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXItcm93LWJnLWNvbG9yKTtcbn1cbi5lbGVtZW50LXJvdzpub3QoLm5vLWRldGFpbHMpLmV4cGFuZGVkIHtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5lbGVtZW50LWRldGFpbC1yb3cge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kZXRhaWwtYmctY29sb3IpO1xufVxuLmVsZW1lbnQtZGV0YWlsLXJvdyBwOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi5lbGVtZW50LWRldGFpbC1yb3cgbWF0LWNlbGwge1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufVxuXG4ubWF0LXBhZ2luYXRvcixcbi5tYXQtaGVhZGVyLWNlbGwsXG4ubWF0LWNlbGwsXG4ubWF0LWZvb3Rlci1jZWxsIHtcbiAgY29sb3I6IGluaGVyaXQ7XG59XG5cbi5tYXQtY29sdW1uLW51bWJlcixcbi5tYXQtY29sdW1uLXN0YXRlIHtcbiAgbWF4LXdpZHRoOiAxMDBweDtcbn1cblxuLm1hdC1jb2x1bW4tY3JlYXRlZCB7XG4gIG1heC13aWR0aDogMTMwcHg7XG59XG5cbi5tYXQtaGVhZGVyLXJvdyB7XG4gIGJveC1zaGFkb3c6IDAgLTRweCA1cHggIzAwMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE5MWMyNTtcbn1cblxubWF0LXJvdyB7XG4gIG1pbi1oZWlnaHQ6IDMwcHg7XG59Il19 */"

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








var AppComponent = /** @class */ (function () {
    function AppComponent(PlanetService) {
        this.PlanetService = PlanetService;
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